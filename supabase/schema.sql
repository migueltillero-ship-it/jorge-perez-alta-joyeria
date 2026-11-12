-- Tabla para administrar precios, stock y promociones en tiempo real desde Supabase
create table public.joyas_catalogo (
    id text primary key,
    codigo text not null,
    precio_clp integer not null,
    disponible boolean default true,
    actualizado_en timestamp with time zone default now()
);

insert into public.joyas_catalogo (id, codigo, precio_clp, disponible) values
('01', 'PIEZA I', 540000, true),
('02', 'PIEZA II', 490000, true),
('03', 'PIEZA III', 510000, true),
('04', 'PIEZA IV', 470000, true),
('05', 'PIEZA V', 560000, true),
('06', 'PIEZA VI', 620000, true),
('07', 'PIEZA VII', 520000, true),
('08', 'PIEZA VIII', 530000, true),
('09', 'PIEZA IX', 550000, true);
