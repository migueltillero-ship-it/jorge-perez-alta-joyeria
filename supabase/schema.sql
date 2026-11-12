-- Tabla opcional para administrar precios y disponibilidad desde Supabase.
-- El sitio actual NO la usa: los precios vigentes están en js/catalog.js.
-- Si algún día se conecta, mantener estos valores iguales a los de js/catalog.js.
create table if not exists public.joyas_catalogo (
    id text primary key,
    codigo text not null,
    nombre text not null,
    precio_clp integer not null,
    disponible boolean default true,
    actualizado_en timestamp with time zone default now()
);

insert into public.joyas_catalogo (id, codigo, nombre, precio_clp, disponible) values
('01', 'I',    'Rosa de los Vientos',  540000, true),
('02', 'II',   'Gota Austral',         490000, true),
('03', 'III',  'Vértice Andino',       510000, true),
('04', 'IV',   'Campana Austral',      525000, true),
('05', 'V',    'Horizonte Mineral',    560000, true),
('06', 'VI',   'Tríptico del Tiempo',  680000, true),
('07', 'VII',  'Voluta Barroca',       550000, true),
('08', 'VIII', 'Órbita Interior',      530000, true),
('09', 'IX',   'Nudo Marinero',        590000, true)
on conflict (id) do update set codigo = excluded.codigo, nombre = excluded.nombre, precio_clp = excluded.precio_clp;
