const WORDS = [
    'ABRIR', 'ACERO', 'ACTOR', 'AGUDO', 'ALBUM', 'ALDEA', 'ALETA', 'ALTAR', 'AMIGO', 'ANCHO',
    'ANGEL', 'ANIMO', 'ANTES', 'ARENA', 'ARMAS', 'ARROZ', 'ASADO', 'ATLAS', 'AVION', 'AYUDA',
    'BAILE', 'BANCO', 'BANDA', 'BARCO', 'BARRO', 'BEBER', 'BELLO', 'BESAR', 'BICHO', 'BLUSA',
    'BOLSA', 'BOMBA', 'BORDE', 'BOTAS', 'BRAZO', 'BRAVO', 'BRISA', 'BRUJA', 'BUENO', 'BURRO',
    'CABAL', 'CABRA', 'CACAO', 'CAIDA', 'CALLE', 'CALOR', 'CAMPO', 'CANAL', 'CANTO', 'CARNE',
    'CARTA', 'CASAR', 'CASCO', 'CAZAR', 'CEBRA', 'CERDO', 'CERRO', 'CESAR', 'CIELO', 'CINTA',
    'CIRCO', 'CISNE', 'CLARO', 'CLASE', 'CLAVO', 'CLIMA', 'COBRA', 'COCHE', 'COLOR', 'CORAL',
    'CORRE', 'CORTO', 'CREMA', 'CRUDO', 'CRUEL', 'CUERO', 'CUEVA', 'CULPA', 'CURSO', 'CURVA',
    'DANZA', 'DARDO', 'DEBER', 'DECIR', 'DEDOS', 'DELTA', 'DIETA', 'DIGNO', 'DISCO', 'DOLOR',
    'DRAMA', 'DROGA', 'DUCHA', 'DULCE', 'DUQUE', 'DURAR', 'EBANO', 'EDAD', 'ELITE', 'ENANO',
    'ENERO', 'ERIZO', 'ERROR', 'ESCUDO', 'ESLAVO', 'ESPADA', 'ESTADO', 'ESTILO', 'ETAPA', 'EXITO',
    'FANGO', 'FAUNA', 'FECHA', 'FELIZ', 'FERIA', 'FIBRA', 'FIERA', 'FIESTA', 'FIRMA', 'FLACO',
    'FLECHA', 'FLOJO', 'FLORA', 'FLUJO', 'FONDO', 'FORMA', 'FORRO', 'FRENO', 'FRESA', 'FRIO',
    'FRUTA', 'FUEGO', 'FUERA', 'FUERZA', 'FURIA', 'GALLO', 'GAMBA', 'GANSO', 'GARRA', 'GASTO',
    'GATOS', 'GENIO', 'GENTE', 'GLOBO', 'GOLFO', 'GOLPE', 'GORRO', 'GOTAS', 'GRAMO', 'GRANO',
    'GRASA', 'GRIFO', 'GRITO', 'GRUPO', 'GUAPO', 'GUIAS', 'GUSTO', 'HABER', 'HABLA', 'HACHA',
    'HADAS', 'HEROE', 'HIELO', 'HIERRO', 'HILOS', 'HOGAR', 'HOJAS', 'HOMBRE', 'HONGO', 'HONOR',
    'HORAS', 'HOTEL', 'HUECO', 'HUESO', 'HUEVO', 'HUMOR', 'IDEAS', 'IGLESIA', 'IMAGEN', 'INDIO',
    'ISLAS', 'JABON', 'JARRA', 'JAULA', 'JEFES', 'JOVEN', 'JUEGO', 'JUGAR', 'JUGOS', 'JULIO',
    'JUNTA', 'JUNTO', 'LABOR', 'LADOS', 'LAGOS', 'LANZA', 'LARGO', 'LATAS', 'LAVAR', 'LAZOS',
    'LECHO', 'LECHE', 'LEER', 'LEGAL', 'LEJOS', 'LENTO', 'LETRA', 'LIBRO', 'LIMON', 'LIMPIO',
    'LINDO', 'LINEA', 'LISTA', 'LISTO', 'LITRO', 'LLAMA', 'LLAVE', 'LLENO', 'LOBOS', 'LOCOS',
    'LOGRO', 'LOMOS', 'LONAS', 'LOROS', 'LOTES', 'LUCHA', 'LUEGO', 'LUGAR', 'LUJOS', 'LUNAR',
    'LUNES', 'MADRE', 'MAGIA', 'MANGO', 'MANOS', 'MANTA', 'MAPAS', 'MARCA', 'MARCO', 'MAREA',
    'MASAS', 'MAYOR', 'MEDIO', 'MEJOR', 'MELON', 'MENOR', 'MESAS', 'METAL', 'METRO', 'MIEDO',
    'MIELES', 'MIRAR', 'MODAS', 'MODOS', 'MOJAR', 'MOLDE', 'MONTE', 'MORAL', 'MORDER', 'MORIR',
    'MOSCA', 'MOVER', 'MUCHO', 'MUELA', 'MUERTE', 'MUJER', 'MUNDO', 'MUROS', 'MUSLO', 'NACER',
    'NADAR', 'NARIZ', 'NEGRO', 'NIEVE', 'NIÑOS', 'NIVEL', 'NOBLE', 'NOCHE', 'NORTE', 'NOTAS',
    'NUBES', 'NUDOS', 'NUEVO', 'NUNCA', 'OBRAS', 'OCEAN', 'ODIAR', 'OESTE', 'OLIVO', 'ONDAS',
    'OPERA', 'ORDEN', 'OREJA', 'ORILLA', 'OSADO', 'OVEJA', 'PADRE', 'PAGAR', 'PAISES', 'PAJARO',
    'PALAS', 'PALMA', 'PALOMA', 'PANEL', 'PAPEL', 'PARED', 'PARTE', 'PASAR', 'PASEO', 'PASTA',
    'PASTO', 'PATOS', 'PAUSA', 'PECHO', 'PEDIR', 'PEGAR', 'PEINE', 'PELAR', 'PENAS', 'PERLA',
    'PERRO', 'PESAR', 'PESCA', 'PESOS', 'PIANO', 'PICAR', 'PIEDRA', 'PIELES', 'PIERNA', 'PIEZA',
    'PINOS', 'PINTAR', 'PIÑAS', 'PISOS', 'PLANO', 'PLATA', 'PLATO', 'PLAYA', 'PLAZA', 'PLENO',
    'PLOMO', 'PLUMA', 'POBRE', 'POCOS', 'PODER', 'POEMA', 'POETA', 'POLAR', 'POLLO', 'POLVO',
    'PONER', 'PORTAL', 'POSTE', 'POZOS', 'PRADO', 'PRECIO', 'PREMIO', 'PRENSA', 'PRESO', 'PRIMO',
    'PRISA', 'PRUEBA', 'PUEBLO', 'PUENTE', 'PUERTA', 'PUERTO', 'PULGA', 'PULSO', 'PUNTA', 'PUNTO',
    'PUROS', 'QUEDAR', 'QUEJA', 'QUERER', 'QUESO', 'QUIEN', 'QUIETO', 'QUITAR', 'RABIA', 'RADIO',
    'RAICES', 'RAMAS', 'RANGO', 'RAPIDO', 'RAROS', 'RASGO', 'RATON', 'RAYOS', 'RAZON', 'REALES',
    'RECTA', 'RECTO', 'REGLA', 'REINO', 'REIR', 'RELOJ', 'REMOS', 'RENTA', 'RESTO', 'RETOS',
    'REZAR', 'RICOS', 'RIEGO', 'RIENDA', 'RIESGO', 'RIFLE', 'RIGOR', 'RINCON', 'RIÑON', 'RIOS',
    'RISAS', 'RITMO', 'ROBAR', 'ROBLE', 'ROCAS', 'ROCIO', 'RODAR', 'RODEO', 'ROGAR', 'ROJOS',
    'ROLLO', 'ROMPER', 'RONDA', 'ROPAS', 'ROSAS', 'ROSTRO', 'ROTOS', 'RUBIO', 'RUEDA', 'RUIDO',
    'RUINA', 'RUMBO', 'RUMOR', 'RURAL', 'RUTAS', 'SABER', 'SABIO', 'SABOR', 'SACAR', 'SACOS',
    'SAGRADO', 'SALES', 'SALAS', 'SALIR', 'SALSA', 'SALTAR', 'SALUD', 'SALVO', 'SANGRE', 'SANTO',
    'SAPOS', 'SECOS', 'SEDAS', 'SEGUIR', 'SELLO', 'SELVA', 'SEMANA', 'SEÑAL', 'SEÑOR', 'SERIO',
    'SIERRA', 'SIGLO', 'SIGNO', 'SILBAR', 'SILLA', 'SITIO', 'SOBRE', 'SOCIO', 'SOLDAR', 'SOLER',
    'SOLOS', 'SOMBRA', 'SONAR', 'SOPLAR', 'SORDO', 'SUAVE', 'SUBIR', 'SUCIO', 'SUDAR', 'SUELO',
    'SUEÑO', 'SUERTE', 'SUMAS', 'SUMOS', 'SUPER', 'TABLA', 'TACOS', 'TACTO', 'TAJOS', 'TALAR',
    'TALLER', 'TALON', 'TAMAÑO', 'TAMBOR', 'TANGO', 'TAPAS', 'TARDE', 'TAREA', 'TARJETA', 'TARRO',
    'TARTA', 'TASAS', 'TAZAS', 'TECHO', 'TECLA', 'TELAS', 'TEMAS', 'TEMER', 'TEMPLE', 'TENDER',
    'TENER', 'TENSO', 'TEÑIR', 'TERCIO', 'TERMO', 'TERNERO', 'TESORO', 'TEXTO', 'TIBIO', 'TIEMPO',
    'TIENDA', 'TIERRA', 'TIGRE', 'TIMBRE', 'TINTA', 'TIRAR', 'TITULO', 'TOCAR', 'TOLDO', 'TOMAR',
    'TONOS', 'TONTO', 'TOPOS', 'TOQUE', 'TORCER', 'TORMENTA', 'TORNO', 'TOROS', 'TORRE', 'TORTA',
    'TOSER', 'TOTAL', 'TRAER', 'TRAGO', 'TRAJE', 'TRAMO', 'TRAMPA', 'TRATO', 'TRAZAR', 'TREBOL',
    'TRENZA', 'TREPAR', 'TRIBU', 'TRIGO', 'TRIPLE', 'TRISTE', 'TRIUNFO', 'TRONAR', 'TRONCO', 'TRONO',
    'TROPA', 'TROZO', 'TRUCHA', 'TRUENO', 'TUBOS', 'TUMBA', 'TUMOR', 'TURNO', 'TUTOR', 'ULTIMO',
    'UNICO', 'UNIDAD', 'UNIR', 'URBANO', 'URGENTE', 'USAR', 'UTILES', 'VACIO', 'VAGON', 'VALER',
    'VALLE', 'VALOR', 'VALSA', 'VAPOR', 'VARAS', 'VARIO', 'VARON', 'VASOS', 'VECINO', 'VELAS',
    'VELAR', 'VELOS', 'VELOZ', 'VENAS', 'VENCER', 'VENDER', 'VENENO', 'VENIR', 'VENTA', 'VENUS',
    'VERBO', 'VERDE', 'VERSO', 'VESTIR', 'VIAJE', 'VIBRAR', 'VICIO', 'VIDAS', 'VIDRIO', 'VIEJO',
    'VIENTO', 'VIGOR', 'VILLA', 'VINOS', 'VIÑAS', 'VIOLIN', 'VIRAL', 'VIRGEN', 'VIRTUD', 'VISION',
    'VISITA', 'VISTA', 'VIUDA', 'VIVIR', 'VIVOS', 'VOCAL', 'VOLAR', 'VOLTEAR', 'VOLUMEN', 'VOLVER',
    'VOTAR', 'VUELO', 'VUELTA', 'YEGUA', 'YEMAS', 'YERNO', 'YESOS', 'YUGOS', 'ZANJA', 'ZAPATO',
    'ZARPA', 'ZONAS', 'ZORRO', 'ZUMOS', 'ACIDO', 'ACTOS', 'AFAN', 'AGUAS', 'AGUJA', 'AJENA',
    'AJENO', 'ALADO', 'ALAMO', 'ALGAS', 'ALMAS', 'ALTOS', 'ALZAR', 'AMAR', 'AMBOS', 'ANDAR',
    'ANSIA', 'ANUAL', 'APODO', 'ARADO', 'ARBOL', 'ARCOS', 'ARDOR', 'AREAS', 'ARMAR', 'AROMA',
    'ARTES', 'ASEAR', 'ASILO', 'ASTAS', 'ASTRO', 'ATAJO', 'ATAR', 'ATAUD', 'ATOMO', 'ATROZ',
    'AUDAZ', 'AULAS', 'AUTOS', 'AVES', 'AVISO', 'AZAR', 'AZOTE', 'AZUL', 'BAJAR', 'BAJOS',
    'BALAS', 'BALSA', 'BAÑOS', 'BARES', 'BASES', 'BASTON', 'BATAS', 'BEBES', 'BESOS', 'BINGO',
    'BIZCO', 'BOCAS', 'BODAS', 'BOINA', 'BOLAS', 'BOLOS', 'BOLSO', 'BONOS', 'BOTES', 'BOTON',
    'BOXEO', 'BREVE', 'BROCA', 'BROMA', 'BROTE', 'BRUTO', 'BUCEO', 'BUENA', 'BUFAR', 'BUQUE',
    'BURLA', 'BUSCA', 'CABER', 'CABLES', 'CAER', 'CAFES', 'CAJAS', 'CALMA', 'CALVO', 'CAMAS',
    'CANAS', 'CAÑOS', 'CAÑON', 'CAPAS', 'CARAS', 'CARGA', 'CAROS', 'CARPA', 'CARRO', 'CASAS',
    'CASOS', 'CASTA', 'CATAR', 'CAUCE', 'CAUSA', 'CAVAR', 'CEDER', 'CEDRO', 'CEGAR', 'CEJAS',
    'CELDA', 'CELOS', 'CENAS', 'CENSO', 'CERCO', 'CERDOS', 'CEROS', 'CESPED', 'CESTA', 'CETRO',
    'CHICA', 'CHICO', 'CHILE', 'CHINA', 'CHINO', 'CHIVO', 'CHOCA', 'CHOQUE', 'CHUPAR', 'CICLO',
    'CIEN', 'CIFRA', 'CINCO', 'CITAR', 'CIVIL', 'CLARA', 'CLAVE', 'COBRE', 'COCER', 'COCOS',
    'CODEX', 'CODOS', 'COGER', 'COLAR', 'COLES', 'COLMO', 'COLON', 'COMAS', 'COMBO', 'COMER',
    'COMIC', 'CONOS', 'COPAS', 'COPIA', 'CORAN', 'COROS', 'CORRAL', 'CORTA', 'CORTE', 'COSAS',
    'COSER', 'COSTA', 'COSTE', 'COSTO', 'COTOS', 'CREAR', 'CREER', 'CRIAS', 'CRUZA', 'CUADRO',
    'CUAJO', 'CUALES', 'CUANTO', 'CUARTO', 'CUBAS', 'CUBOS', 'CUBRIR', 'CUELLO', 'CUENCA', 'CUENTA',
    'CUENTO', 'CUERDA', 'CUERNO', 'CUERPO', 'CUIDA', 'CULTO', 'CUMBRE', 'CUOTA', 'CURAR', 'CURVO',
    'DAMAS', 'DAÑAR', 'DAÑOS', 'DATAR', 'DATOS', 'DEBIL', 'DEDAL', 'DEMAS', 'DEMON', 'DENSO',
    'DIENTE', 'DIQUE', 'DIVAN', 'DOBLE', 'DOCE', 'DOGMA', 'DOLAR', 'DOMAR', 'DONAR', 'DONDE',
    'DORAR', 'DORMIR', 'DOSIS', 'DOTAR', 'DUDAS', 'DUELO', 'DUEÑO', 'DUNAS', 'EBANO', 'ECHAR',
    'EDEMA', 'EDITAR', 'EFECTO', 'EJES', 'EMITIR', 'ENFADO', 'ENOJO', 'ENORME', 'ENTERO', 'EPOCA',
    'ESCALA', 'ESCENA', 'ESPEJO', 'ESPERA', 'ESPIAR', 'ESPINA', 'ESPOSA', 'ESPOSO', 'ESPUMA', 'ESTAR',
    'ESTOS', 'ETICA', 'ETNIA', 'EVITAR', 'EXAMEN', 'EXCESO', 'EXILIO', 'EXTRA', 'FABULA', 'FACIAL',
    'FACIL', 'FALDA', 'FALLO', 'FALSO', 'FALTA', 'FATAL', 'FAVOR', 'FEROZ', 'FICHA', 'FIDEO',
    'FIEBRE', 'FIGURA', 'FIJAR', 'FILAS', 'FILME', 'FINAL', 'FINCA', 'FIRME', 'FISCAL', 'FOCAL',
    'FOCOS', 'FOGON', 'FORZAR', 'FOSAS', 'FOTOS', 'FRESCO', 'FRITO', 'FUENTE', 'FUERTE', 'FUGAS',
    'FUMAR', 'FUNDA', 'FUSIL', 'GAFAS', 'GAITA', 'GAJOS', 'GALAN', 'GANAS', 'GARAJE', 'GASES',
    'GAVIN', 'GENERO', 'GESTO', 'GIRAR', 'GLORIA', 'GOMAS', 'GORDO', 'GORRA', 'GOZAR', 'GRACIA',
    'GRADO', 'GRAFO', 'GRAVE', 'GRIPE', 'GUARDA', 'GUIAR', 'GUION', 'GUISO', 'HABIL', 'HABITO',
    'HACER', 'HACHA', 'HADAS', 'HARTO', 'HASTA', 'HECHO', 'HELAR', 'HEMBRA', 'HERIR', 'HIJOS',
    'HILOS', 'HOJAS', 'HORAS', 'HORNO', 'HUCHA', 'HUECO', 'HUELE', 'HUESO', 'HUEVO', 'HUIDA',
    'HUIR', 'HUMO', 'HUMOR', 'HUNDIR', 'IDEAS', 'IDEAL', 'IDOLO', 'IGUAL', 'ILESO', 'IMPAR',
    'INDIO', 'INFIEL', 'INGLES', 'INICIO', 'INJUSTO', 'INMUNE', 'INSANO', 'ISLA', 'ISLAS', 'JABON',
    'JAMAS', 'JARRA', 'JAULA', 'JEFES', 'JOVEN', 'JOYAS', 'JUEGO', 'JUEVES', 'JUGAR', 'JUGOS',
    'JUICIO', 'JULIO', 'JUNIO', 'JUNTA', 'JUNTO', 'JURAR', 'JUSTO', 'LABOR', 'LADOS', 'LAGOS',
    'LAMER', 'LAMPA', 'LANAS', 'LANZA', 'LAPIZ', 'LARGO', 'LARVA', 'LATAS', 'LATIN', 'LAVAR',
    'LAZOS', 'LECHO', 'LECHE', 'LEER', 'LEGAL', 'LEJOS', 'LENTO', 'LEÑA', 'LEON', 'LETRA',
    'LEVES', 'LIBRO', 'LICOR', 'LIMON', 'LIMPIO', 'LINDO', 'LINEA', 'LISTA', 'LISTO', 'LITRO',
    'LLAMA', 'LLAVE', 'LLENO', 'LLEVAR', 'LLORAR', 'LOBOS', 'LOCOS', 'LOGRO', 'LOMOS', 'LONAS',
    'LOROS', 'LOTES', 'LUCHA', 'LUEGO', 'LUGAR', 'LUJOS', 'LUNAR', 'LUNES', 'MADRE', 'MAGIA',
    'MAGOS', 'MAIZ', 'MALES', 'MALLA', 'MALVA', 'MAMAS', 'MANGO', 'MANIA', 'MANOS', 'MANTA',
    'MAPAS', 'MARCA', 'MARCO', 'MAREA', 'MARGEN', 'MARTE', 'MARZO', 'MASAS', 'MATAR', 'MAYOR',
    'MEDIO', 'MEJOR', 'MELON', 'MENOR', 'MENOS', 'MENTA', 'MESAS', 'METAL', 'METER', 'METRO',
    'MEZCLA', 'MIEDO', 'MIELES', 'MIRAR', 'MITOS', 'MODAS', 'MODELO', 'MODOS', 'MOJAR', 'MOLDE',
    'MOLER', 'MONJE', 'MONTE', 'MORAL', 'MORDER', 'MORIR', 'MOSCA', 'MOVER', 'MUCHO', 'MUELA',
    'MUERTE', 'MUJER', 'MULTA', 'MUNDO', 'MUROS', 'MUSLO', 'NACER', 'NADAR', 'NADIE', 'NARIZ',
    'NATAL', 'NAVAL', 'NAVES', 'NECIO', 'NEGAR', 'NEGRO', 'NERVIO', 'NIEVE', 'NIÑOS', 'NIVEL',
    'NOBLE', 'NOCHE', 'NORMA', 'NORTE', 'NOTAS', 'NOVIA', 'NOVIO', 'NUBES', 'NUDOS', 'NUERA',
    'NUEVE', 'NUEVO', 'NUNCA', 'OBRAS', 'OCEAN', 'OCHOS', 'OCIO', 'ODIAR', 'ODIO', 'OESTE',
    'OIDOS', 'OLIVO', 'OLLAS', 'ONDAS', 'OPERA', 'OPTAR', 'ORDEN', 'OREJA', 'ORILLA', 'OSADO',
    'OSOS', 'OTRAS', 'OTROS', 'OVEJA', 'OXIDO', 'PADRE', 'PAGAR', 'PAGOS', 'PAISES', 'PAJARO',
    'PALAS', 'PALMA', 'PALOMA', 'PANES', 'PANEL', 'PAPEL', 'PARED', 'PARES', 'PARIS', 'PARTE',
    'PASAR', 'PASEO', 'PASOS', 'PASTA', 'PASTO', 'PATOS', 'PAUSA', 'PECHO', 'PEDIR', 'PEGAR',
    'PEINE', 'PELAR', 'PENAS', 'PERLA', 'PERRO', 'PESAR', 'PESCA', 'PESOS', 'PIANO', 'PICAR',
    'PIEDRA', 'PIELES', 'PIERNA', 'PIEZA', 'PINOS', 'PINTAR', 'PIÑAS', 'PISOS', 'PISTA', 'PLANO',
    'PLATA', 'PLATO', 'PLAYA', 'PLAZA', 'PLENO', 'PLOMO', 'PLUMA', 'POBRE', 'POCOS', 'PODER',
    'POEMA', 'POETA', 'POLAR', 'POLLO', 'POLVO', 'PONER', 'PORTAL', 'POSTE', 'POZOS', 'PRADO',
    'PRECIO', 'PREMIO', 'PRENSA', 'PRESO', 'PRIMO', 'PRISA', 'PRUEBA', 'PUEBLO', 'PUENTE', 'PUERTA',
    'PUERTO', 'PULGA', 'PULSO', 'PUNTA', 'PUNTO', 'PUROS', 'QUEDAR', 'QUEJA', 'QUERER', 'QUESO',
    'QUIEN', 'QUIETO', 'QUITAR', 'RABIA', 'RADIO', 'RAICES', 'RAMAS', 'RANGO', 'RAPIDO', 'RAROS',
    'RASGO', 'RATON', 'RAYOS', 'RAZON', 'REALES', 'RECTA', 'RECTO', 'REGLA', 'REINO', 'REIR',
    'RELOJ', 'REMOS', 'RENTA', 'RESTO', 'RETOS', 'REZAR', 'RICOS', 'RIEGO', 'RIENDA', 'RIESGO',
    'RIFLE', 'RIGOR', 'RINCON', 'RIÑON', 'RIOS', 'RISAS', 'RITMO', 'ROBAR', 'ROBLE', 'ROCAS',
    'ROCIO', 'RODAR', 'RODEO', 'ROGAR', 'ROJOS', 'ROLLO', 'ROMPER', 'RONDA', 'ROPAS', 'ROSAS',
    'ROSTRO', 'ROTOS', 'RUBIO', 'RUEDA', 'RUIDO', 'RUINA', 'RUMBO', 'RUMOR', 'RURAL', 'RUTAS',
    'SABER', 'SABIO', 'SABOR', 'SACAR', 'SACOS', 'SAGRADO', 'SALES', 'SALAS', 'SALIR', 'SALSA',
    'SALTAR', 'SALUD', 'SALVO', 'SANGRE', 'SANTO', 'SAPOS', 'SECOS', 'SEDAS', 'SEGUIR', 'SELLO',
    'SELVA', 'SEMANA', 'SEÑAL', 'SEÑOR', 'SERIO', 'SIERRA', 'SIGLO', 'SIGNO', 'SILBAR', 'SILLA',
    'SITIO', 'SOBRE', 'SOCIO', 'SOLDAR', 'SOLER', 'SOLOS', 'SOMBRA', 'SONAR', 'SOPLAR', 'SORDO',
    'SUAVE', 'SUBIR', 'SUCIO', 'SUDAR', 'SUELO', 'SUEÑO', 'SUERTE', 'SUMAS', 'SUMOS', 'SUPER',
    'TABLA', 'TACOS', 'TACTO', 'TAJOS', 'TALAR', 'TALLER', 'TALON', 'TAMAÑO', 'TAMBOR', 'TANGO',
    'TAPAS', 'TARDE', 'TAREA', 'TARJETA', 'TARRO', 'TARTA', 'TASAS', 'TAZAS', 'TECHO', 'TECLA',
    'TELAS', 'TEMAS', 'TEMER', 'TEMPLE', 'TENDER', 'TENER', 'TENSO', 'TEÑIR', 'TERCIO', 'TERMO',
    'TERNERO', 'TESORO', 'TEXTO', 'TIBIO', 'TIEMPO', 'TIENDA', 'TIERRA', 'TIGRE', 'TIMBRE', 'TINTA',
    'TIRAR', 'TITULO', 'TOCAR', 'TOLDO', 'TOMAR', 'TONOS', 'TONTO', 'TOPOS', 'TOQUE', 'TORCER',
    'TORMENTA', 'TORNO', 'TOROS', 'TORRE', 'TORTA', 'TOSER', 'TOTAL', 'TRAER', 'TRAGO', 'TRAJE',
    'TRAMO', 'TRAMPA', 'TRATO', 'TRAZAR', 'TREBOL', 'TRENZA', 'TREPAR', 'TRIBU', 'TRIGO', 'TRIPLE',
    'TRISTE', 'TRIUNFO', 'TRONAR', 'TRONCO', 'TRONO', 'TROPA', 'TROZO', 'TRUCHA', 'TRUENO', 'TUBOS',
    'TUMBA', 'TUMOR', 'TURNO', 'TUTOR', 'ULTIMO', 'UNICO', 'UNIDAD', 'UNIR', 'URBANO', 'URGENTE',
    'USAR', 'UTILES', 'VACIO', 'VAGON', 'VALER', 'VALLE', 'VALOR', 'VALSA', 'VAPOR', 'VARAS',
    'VARIO', 'VARON', 'VASOS', 'VECINO', 'VELAS', 'VELAR', 'VELOS', 'VELOZ', 'VENAS', 'VENCER',
    'VENDER', 'VENENO', 'VENIR', 'VENTA', 'VENUS', 'VERBO', 'VERDE', 'VERSO', 'VESTIR', 'VIAJE',
    'VIBRAR', 'VICIO', 'VIDAS', 'VIDRIO', 'VIEJO', 'VIENTO', 'VIGOR', 'VILLA', 'VINOS', 'VIÑAS',
    'VIOLIN', 'VIRAL', 'VIRGEN', 'VIRTUD', 'VISION', 'VISITA', 'VISTA', 'VIUDA', 'VIVIR', 'VIVOS',
    'VOCAL', 'VOLAR', 'VOLTEAR', 'VOLUMEN', 'VOLVER', 'VOTAR', 'VUELO', 'VUELTA', 'YEGUA', 'YEMAS',
    'YERNO', 'YESOS', 'YUGOS', 'ZANJA', 'ZAPATO', 'ZARPA', 'ZONAS', 'ZORRO', 'ZUMOS'
];

const KEYBOARD_LAYOUT = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
];

let targetWord = WORDS[Math.floor(Math.random() * WORDS.length)];
let currentRow = 0;
let currentTile = 0;
let currentGuess = '';
let gameOver = false;
let startTime = Date.now();

const gameBoard = document.getElementById('game-board');
const keyboard = document.getElementById('keyboard');
const messageEl = document.getElementById('message');

function init() {
    createBoard();
    createKeyboard();
    document.addEventListener('keydown', handleKeyPress);
}

function createBoard() {
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < 5; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.id = `tile-${i}-${j}`;
            row.appendChild(tile);
        }
        gameBoard.appendChild(row);
    }
}

function createKeyboard() {
    KEYBOARD_LAYOUT.forEach(row => {
        const keyboardRow = document.createElement('div');
        keyboardRow.className = 'keyboard-row';
        row.forEach(key => {
            const button = document.createElement('button');
            button.className = key.length > 1 ? 'key wide' : 'key';
            button.textContent = key;
            button.dataset.key = key;
            button.addEventListener('click', () => handleKey(key));
            keyboardRow.appendChild(button);
        });
        keyboard.appendChild(keyboardRow);
    });
}

function handleKeyPress(e) {
    if (gameOver) return;
    
    const key = e.key.toUpperCase();
    if (key === 'ENTER') {
        handleKey('ENTER');
    } else if (key === 'BACKSPACE') {
        handleKey('⌫');
    } else if (/^[A-ZÑ]$/.test(key)) {
        handleKey(key);
    }
}

function handleKey(key) {
    if (gameOver) return;
    
    if (key === 'ENTER') {
        submitGuess();
    } else if (key === '⌫') {
        deleteLetter();
    } else if (currentTile < 5) {
        addLetter(key);
    }
}

function addLetter(letter) {
    if (currentTile < 5) {
        const tile = document.getElementById(`tile-${currentRow}-${currentTile}`);
        tile.textContent = letter;
        tile.classList.add('filled');
        currentGuess += letter;
        currentTile++;
    }
}

function deleteLetter() {
    if (currentTile > 0) {
        currentTile--;
        const tile = document.getElementById(`tile-${currentRow}-${currentTile}`);
        tile.textContent = '';
        tile.classList.remove('filled');
        currentGuess = currentGuess.slice(0, -1);
    }
}

function submitGuess() {
    if (currentTile !== 5) {
        showMessage('Palabra incompleta');
        return;
    }
    
    if (!WORDS.includes(currentGuess)) {
        showMessage('Palabra no válida');
        shakeTiles();
        return;
    }
    
    checkGuess();
    
    if (currentGuess === targetWord) {
        gameOver = true;
        setTimeout(() => showModal(true), 500);
        return;
    }
    
    currentRow++;
    currentTile = 0;
    currentGuess = '';
    
    if (currentRow === 6) {
        gameOver = true;
        setTimeout(() => showModal(false), 500);
    }
}

function checkGuess() {
    const letterCount = {};
    for (let letter of targetWord) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
    
    const result = Array(5).fill('absent');
    
    for (let i = 0; i < 5; i++) {
        if (currentGuess[i] === targetWord[i]) {
            result[i] = 'correct';
            letterCount[currentGuess[i]]--;
        }
    }
    
    for (let i = 0; i < 5; i++) {
        if (result[i] === 'absent' && targetWord.includes(currentGuess[i]) && letterCount[currentGuess[i]] > 0) {
            result[i] = 'present';
            letterCount[currentGuess[i]]--;
        }
    }
    
    for (let i = 0; i < 5; i++) {
        const tile = document.getElementById(`tile-${currentRow}-${i}`);
        const letter = currentGuess[i];
        
        setTimeout(() => {
            tile.classList.add(result[i]);
            updateKeyboard(letter, result[i]);
        }, i * 100);
    }
}

function updateKeyboard(letter, status) {
    const key = document.querySelector(`[data-key="${letter}"]`);
    if (!key) return;
    
    const currentStatus = key.classList.contains('correct') ? 'correct' :
                         key.classList.contains('present') ? 'present' : 'absent';
    
    if (status === 'correct' || (status === 'present' && currentStatus !== 'correct')) {
        key.classList.remove('correct', 'present', 'absent');
        key.classList.add(status);
    } else if (status === 'absent' && currentStatus === 'absent') {
        key.classList.add('absent');
    }
}

function shakeTiles() {
    const tiles = document.querySelectorAll(`#tile-${currentRow}-0, #tile-${currentRow}-1, #tile-${currentRow}-2, #tile-${currentRow}-3, #tile-${currentRow}-4`);
    tiles.forEach(tile => {
        tile.style.animation = 'none';
        setTimeout(() => {
            tile.style.animation = 'shake 0.5s ease';
        }, 10);
    });
}

function showMessage(text) {
    messageEl.textContent = text;
    messageEl.classList.remove('hidden');
    setTimeout(() => {
        messageEl.classList.add('hidden');
    }, 2000);
}

function showModal(won) {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    
    const content = document.createElement('div');
    content.className = 'modal-content';
    
    if (won) {
        content.innerHTML = `
            <h2>🎉 ¡Felicidades! 🎉</h2>
            <p class="time">Tiempo: ${elapsed} segundos</p>
            <button class="restart-btn" onclick="location.reload()">Jugar de nuevo</button>
        `;
    } else {
        content.innerHTML = `
            <h2>😔 Perdiste</h2>
            <p class="word">La palabra era: <strong>${targetWord}</strong></p>
            <p class="time">Tiempo: ${elapsed} segundos</p>
            <button class="restart-btn" onclick="location.reload()">Intentar de nuevo</button>
        `;
    }
    
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    setTimeout(() => modal.classList.add('show'), 10);
}

init();
