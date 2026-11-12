# =============================================================================
#  JORGE PEREZ · ALTA JOYERIA · ACTUALIZAR Y PUBLICAR EL SITIO
#  Uso (en PowerShell, dentro de la carpeta jorge-perez-alta-joyeria):
#    powershell -ExecutionPolicy Bypass -File .\ACTUALIZAR.ps1
#  Opciones:
#    -UsarTerciopelo   reemplaza las imagenes de campana por las de terciopelo
#                      generadas en Hecha_de_tiempo\05_efecto_terciopelo (revisalas antes)
#    -Publicar         guarda los cambios en git y los sube a GitHub
# =============================================================================
param(
    [switch]$UsarTerciopelo,
    [switch]$Publicar
)
$ErrorActionPreference = "Stop"
$Proyecto = $PSScriptRoot
Set-Location $Proyecto
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$Utf8SinBom = New-Object System.Text.UTF8Encoding($false)
$Terciopelo = Join-Path $env:USERPROFILE "Downloads\Hecha_de_tiempo\05_efecto_terciopelo"
$Catalogo = Join-Path $Proyecto "js\catalog.js"
$Piezas = Join-Path $Proyecto "assets\piezas"

function Titulo($t) { Write-Host ""; Write-Host "== $t ==" -ForegroundColor Cyan }

# Convierte una imagen a JPG de 1600 px como maximo (System.Drawing, incluido en Windows)
function Convertir-Jpg($origen, $destino) {
    Add-Type -AssemblyName System.Drawing
    $img = [System.Drawing.Image]::FromFile($origen)
    try {
        $escala = [Math]::Min(1.0, 1600.0 / [Math]::Max($img.Width, $img.Height))
        $w = [int]($img.Width * $escala); $h = [int]($img.Height * $escala)
        $bmp = New-Object System.Drawing.Bitmap($w, $h)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.DrawImage($img, 0, 0, $w, $h)
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
        $par = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $par.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]85)
        $bmp.Save($destino, $codec, $par)
        $g.Dispose(); $bmp.Dispose()
    } finally { $img.Dispose() }
}

# ------------------------------------------------------------- 1. Imagenes de terciopelo
Titulo "1. Imagenes de campana (terciopelo)"
$texto = [System.IO.File]::ReadAllText($Catalogo, $Utf8SinBom)
$cambios = 0
if (Test-Path $Terciopelo) {
    foreach ($n in "01","02","03","04","05","06","07","08","09") {
        $png = Get-ChildItem $Terciopelo -Filter "$n`_*.png" -ErrorAction SilentlyContinue | Select-Object -First 1
        if (-not $png) { continue }
        # Solo las piezas sin imagen de campana, salvo que se pida -UsarTerciopelo
        $bloque = [regex]::Match($texto, "id: `"$n`"[\s\S]*?img: \{[^}]*\}").Value
        $vacia = $bloque -match "ambiente: null"
        if ($vacia -or $UsarTerciopelo) {
            $destino = Join-Path $Piezas "$n`_ambiente.jpg"
            Convertir-Jpg $png.FullName $destino
            if ($vacia) {
                $nuevo = $bloque -replace "ambiente: null", "ambiente: `"assets/piezas/$n`_ambiente.jpg`""
                $texto = $texto.Replace($bloque, $nuevo)
            }
            Write-Host "  Pieza $n : imagen de terciopelo aplicada ($($png.Name))" -ForegroundColor Green
            $cambios++
        }
    }
    if ($cambios -gt 0) { [System.IO.File]::WriteAllText($Catalogo, $texto, $Utf8SinBom) }
    else { Write-Host "  Sin cambios (usa -UsarTerciopelo para reemplazar las imagenes actuales)." }
} else {
    Write-Host "  No existe $Terciopelo todavia. Se mantienen las imagenes actuales."
}

# ------------------------------------------------------------- 2. Verificacion
Titulo "2. Verificacion de archivos"
$texto = [System.IO.File]::ReadAllText($Catalogo, $Utf8SinBom)
$rutas = [regex]::Matches($texto, '"(assets/[^"]+)"') | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
$faltan = @()
foreach ($r in $rutas) {
    if (-not (Test-Path (Join-Path $Proyecto ($r -replace "/", "\")))) { $faltan += $r }
}
foreach ($f in "index.html", "css\styles.css", "js\app.js", "js\catalog.js") {
    if (-not (Test-Path (Join-Path $Proyecto $f))) { $faltan += $f }
}
if ($faltan.Count -gt 0) {
    Write-Host "  FALTAN estos archivos:" -ForegroundColor Red
    $faltan | ForEach-Object { Write-Host "   - $_" -ForegroundColor Red }
    throw "Corrige los archivos faltantes antes de publicar."
}
Write-Host "  Todo correcto: $($rutas.Count) imagenes referenciadas, ninguna falta." -ForegroundColor Green
$sinMedidas = ([regex]::Matches($texto, 'medidas: ""')).Count
if ($sinMedidas -gt 0) { Write-Host "  Aviso: $sinMedidas piezas sin medidas (se muestra 'consultar por WhatsApp')." -ForegroundColor Yellow }

# ------------------------------------------------------------- 3. Publicar
if ($Publicar) {
    Titulo "3. Publicando en GitHub"
    if (-not (Get-Command git -ErrorAction SilentlyContinue)) { throw "No se encontro git en este equipo." }
    git add index.html coleccion.html joya.html probador.html coleccionistas.html orfebre.html css js assets/piezas assets/video supabase ACTUALIZAR.ps1 CAMBIOS.md
    if ($LASTEXITCODE -ne 0) { throw "git add fallo." }
    git diff --cached --quiet
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  No hay cambios nuevos que guardar."
    } else {
        git commit -m "Sitio v2: piezas corregidas, Orbita incluida, datos sin verificar retirados"
        if ($LASTEXITCODE -ne 0) { throw "git commit fallo (revisa user.name y user.email de git)." }
    }
    git push origin main
    if ($LASTEXITCODE -ne 0) { throw "git push fallo. Revisa tu sesion de GitHub." }
    Write-Host "  Publicado en GitHub." -ForegroundColor Green
}

Titulo "Listo"
Start-Process (Join-Path $Proyecto "index.html")
