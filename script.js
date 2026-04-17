const WORDS = [
    'ABEJA', 'ABONO', 'ABRIR', 'ACERA', 'ACERO', 'ACIDO', 'ACOSO', 'ACTOR', 'ACTOS',
    'ADOBE', 'AFORO', 'AGRIO', 'AGUDO', 'AGUAS', 'AGUJA', 'AHORA', 'AJENA', 'AJENO',
    'AJUAR', 'ALADO', 'ALAMO', 'ALBUM', 'ALDEA', 'ALERO', 'ALETA', 'ALGAS', 'ALMAS',
    'ALTAR', 'ALTOS', 'ALZAR', 'AMBAR', 'AMIGO', 'ANCLA', 'ANCHO', 'ANDAR', 'ANEJO',
    'ANGEL', 'ANIMO', 'ANODO', 'ANSIA', 'ANTES', 'ANUAL', 'AORTA', 'APICE', 'APODO',
    'APOYO', 'ARADO', 'ARBOL', 'ARCOS', 'ARDER', 'ARDOR', 'ARDUO', 'AREAS', 'ARENA',
    'ARIDO', 'ARMAR', 'ARMAS', 'AROMA', 'ARROZ', 'ARTES', 'ASADO', 'ASEAR', 'ASILO',
    'ASOMO', 'ASTAS', 'ASTRO', 'ATAJO', 'ATLAS', 'ATRAS', 'ATOMO', 'ATRIL', 'ATROZ', 
    'AUDAZ',
    'AULAS', 'AUTOS', 'AVENA', 'AVION', 'AVISO', 'AYUDA', 'AYUNO', 'AZOTE',
    'BAHIA', 'BAILE', 'BAJAR', 'BAJOS', 'BALAS', 'BALDE', 'BALSA', 'BANCO', 'BANDA',
    'BARCO', 'BARES', 'BARON', 'BARRO', 'BASES', 'BASTA', 'BASTO', 'BATAS', 'BATEA',
    'BAZAR', 'BEBER', 'BEBES', 'BELLO', 'BERRO', 'BESAR', 'BESOS', 'BETUN', 'BICHO',
    'BINGO', 'BIZCO', 'BLUSA', 'BOCAS', 'BODAS', 'BOINA', 'BOLAS', 'BOLDO', 'BOLOS',
    'BOLSA', 'BOLSO', 'BOMBA', 'BONOS', 'BORDE', 'BORLA', 'BORRA', 'BOTAS', 'BOTES',
    'BOTON', 'BOXEO', 'BRASA', 'BRAVO', 'BRAZO', 'BREVE', 'BRIDA', 'BRISA', 'BROCA',
    'BROMA', 'BROTE', 'BRUJA', 'BRUTO', 'BUCEO', 'BUDIN', 'BUENA', 'BUENO', 'BUFAR',
    'BUFON', 'BULTO', 'BUQUE', 'BURDO', 'BURLA', 'BURRO', 'BUSCA',
    'CABAL', 'CABER', 'CABLE', 'CABOS', 'CABRA', 'CACAO', 'CACHO', 'CAFES', 'CAFRE',
    'CAJAS', 'CALIZ', 'CALLE', 'CALMA', 'CALOR', 'CALVO', 'CALZA', 'CAMAS', 'CAMEO',
    'CAMPO', 'CANAL', 'CANAS', 'CANON', 'CANTO', 'CAPAS', 'CAPAZ', 'CAPON', 'CARAS',
    'CARGA', 'CAREY', 'CARNE', 'CAROS', 'CARPA', 'CARRO', 'CARTA', 'CASAS', 'CASAR',
    'CASCO', 'CASOS', 'CASTA', 'CATAR', 'CATRE', 'CAUCE', 'CAUSA', 'CAVAR', 'CAZAR',
    'CEBRA', 'CEDER', 'CEDRO', 'CEGAR', 'CEJAS', 'CELDA', 'CELOS', 'CENAR', 'CENAS',
    'CENSO', 'CERCO', 'CERDA', 'CERDO', 'CERRO', 'CESAR', 'CESTA', 'CETRO', 'CHAPA',
    'CHICA', 'CHICO', 'CHILE', 'CHINA', 'CHINO', 'CHIVO', 'CHOCA', 'CHOZA', 'CICLO',
    'CIELO', 'CIENO', 'CIFRA', 'CINCO', 'CINTA', 'CIRCO', 'CISNE', 'CITAR', 'CIVIL',
    'CLARA', 'CLARO', 'CLASE', 'CLAVE', 'CLAVO', 'CLIMA', 'CLORO', 'COBRA', 'COBRE',
    'COCER', 'COCOS', 'COCHE', 'CODOS', 'COFRE', 'COGER', 'COLAR', 'COLES', 'COLMO',
    'COLON', 'COLOR', 'COMAS', 'COMAL', 'COMBA', 'COMBO', 'COMER', 'COMIC', 'COMUN', 
    'CONDE', 'CONGA',
    'CONOS', 'COPAL', 'COPAS', 'COPIA', 'CORAL', 'CORAN', 'COROS', 'CORTA', 'CORTE',
    'CORTO', 'CORZO', 'COSAS', 'COSER', 'COSTA', 'COSTE', 'COSTO', 'COTOS', 'CREAR',
    'CREER', 'CREMA', 'CRIBA', 'CRUDO', 'CRUEL', 'CRUZA', 'CUAJO', 'CUBAS', 'CUBOS',
    'CUERO', 'CUEVA', 'CUIDA', 'CULPA', 'CULTO', 'CURSO', 'CURVA', 'CURVO',
    'DAMAS', 'DANZA', 'DARDO', 'DATAR', 'DATOS', 'DEBER', 'DEBIL', 'DECIR', 'DEDAL',
    'DEDOS', 'DEJAR', 'DELTA', 'DEMAS', 'DENSO', 'DICHA', 'DIETA', 'DIGNA', 'DIGNO',
    'DIQUE', 'DISCO', 'DIVAN', 'DOBLE', 'DOCIL', 'DOGMA', 'DOLAR', 'DOLER', 'DOLOR',
    'DOMAR', 'DONAR', 'DONDE', 'DORAR', 'DOSEL', 'DOSIS', 'DOTAR', 'DRAGA', 'DRAMA',
    'DROGA', 'DUCHA', 'DUDAS', 'DUELO', 'DULCE', 'DUNAS', 'DUQUE', 'DURAR',
    'EBANO', 'ECHAR', 'EDEMA', 'EJIDO', 'ELOTE', 'ENANO', 'ENERO', 'ENEMA', 'ENOJO',
    'ENVIO', 'ERIZO', 'ERRAR', 'ERROR', 'ESTAR', 'ESTOS', 'ETAPA', 'ETICA', 'ETNIA',
    'EXITO', 'EXODO', 'EXTRA',
    'FACIL', 'FALAZ', 'FALDA', 'FALLO', 'FALSO', 'FALTA', 'FANGO', 'FAROL', 'FARSA',
    'FATAL', 'FAUNA', 'FAVOR', 'FECHA', 'FELIZ', 'FELPA', 'FERIA', 'FEROZ', 'FEUDO',
    'FIADO', 'FIBRA', 'FICHA', 'FIDEO', 'FIERA', 'FIJAR', 'FILAS', 'FILME', 'FINAL',
    'FINCA', 'FIRMA', 'FIRME', 'FISCO', 'FLACO', 'FLEMA', 'FLETE', 'FLOJO', 'FLORA',
    'FLUJO', 'FOCAL', 'FOCOS', 'FOGON', 'FONDA', 'FONDO', 'FORJA', 'FORMA', 'FORRO',
    'FOSIL', 'FOSAS', 'FOTOS', 'FRENO', 'FRESA', 'FRISO', 'FRITO', 'FRUTA', 'FUEGO',
    'FUERA', 'FUGAS', 'FUMAR', 'FUNDA', 'FURIA', 'FUROR', 'FUSIL', 'FUTON',
    'GAFAS', 'GAITA', 'GAJOS', 'GALAN', 'GALGO', 'GALLO', 'GAMBA', 'GANAS', 'GANSO',
    'GARBO', 'GARRA', 'GARZA', 'GASES', 'GASTO', 'GATOS', 'GEMIR', 'GENIO', 'GENTE',
    'GESTA', 'GESTO', 'GIRAR', 'GLOBO', 'GLOSA', 'GNOMO', 'GOLFO', 'GOLPE', 'GOMAS',
    'GORDO', 'GORRA', 'GORRO', 'GOTAS', 'GOZAR', 'GRADO', 'GRAMO', 'GRANO', 'GRAPA',
    'GRASA', 'GRAVA', 'GRAVE', 'GREDA', 'GRIFO', 'GRIPE', 'GRITO', 'GRUTA', 'GUANO',
    'GUAPO', 'GUATA', 'GUIAR', 'GUIAS', 'GUION', 'GUISO', 'GUSTO',
    'HABER', 'HABIL', 'HABLA', 'HACER', 'HACHA', 'HADAS', 'HALAR', 'HARTO', 'HASTA', 
    'HECHO',
    'HEDOR', 'HELAR', 'HELIO', 'HENNA', 'HERIR', 'HEROE', 'HIELO', 'HILOS', 'HOGAR',
    'HOJAS', 'HONGO', 'HONOR', 'HORAS', 'HORNO', 'HOSCO', 'HOTEL', 'HUCHA', 'HUECO',
    'HUELE', 'HUESO', 'HUEVO', 'HUIDA', 'HUMOR', 'HUMUS',
    'ICONO', 'IDEAL', 'IDEAS', 'IDOLO', 'IGUAL', 'ILESO', 'ILUSA', 'ILUSO', 'IMPAR',
    'IMPIO', 'INDIO', 'ISLAS',
    'JABON', 'JAMAS', 'JAMON', 'JARRA', 'JASPE', 'JAULA', 'JEFES', 'JERGA', 'JOVEN',
    'JOYAS', 'JUEGO', 'JUGAR', 'JUGOS', 'JULIO', 'JUNIO', 'JUNTA', 'JUNTO', 'JURAR',
    'JUREL', 'JUSTO',
    'KARMA', 'KEFIR',
    'LABOR', 'LACRA', 'LADOS', 'LAGOS', 'LAICO', 'LAMER', 'LAMPA', 'LANAS', 'LANCE',
    'LANZA', 'LAPIZ', 'LAPSO', 'LARGO', 'LARVA', 'LASER', 'LATAS', 'LATIN', 'LATIR',
    'LAUDO', 'LAVAR', 'LAZOS', 'LECHO', 'LECHE', 'LEGAL', 'LEGUA', 'LEJOS', 'LENTO',
    'LEPRA', 'LETRA', 'LEVES', 'LIBAR', 'LIBRO', 'LICEO', 'LICOR', 'LIDIA', 'LIGAR',
    'LIMBO', 'LIMON', 'LINCE', 'LINDO', 'LINEA', 'LIRIO', 'LISTA', 'LISTO', 'LITRO',
    'LLAGA', 'LLAMA', 'LLANO', 'LLAVE', 'LLENO', 'LLORO', 'LOBOS', 'LOCAL', 'LOCOS',
    'LOGIA',
    'LOGRO', 'LOMOS', 'LONAS', 'LOROS', 'LOTES', 'LUCHA', 'LUCIR', 'LUEGO', 'LUGAR',
    'LUJOS', 'LUNAR', 'LUNES',
    'MACHO', 'MACRO', 'MADRE', 'MAFIA', 'MAGIA', 'MAGMA', 'MAGOS', 'MAJAR', 'MALES',
    'MALLA', 'MALTA', 'MALVA', 'MAMAS', 'MANDO', 'MANGO', 'MANIA', 'MANOS', 'MANTA', 
    'MANTO',
    'MAPAS', 'MARCA', 'MARCO', 'MAREA', 'MARTE', 'MARZO', 'MASAS', 'MATAR', 'MATIZ',
    'MAULA', 'MAYOR', 'MEDIA', 'MEDIO', 'MEJOR', 'MELON', 'MENOR', 'MENOS', 'MENTA',
    'MERMA', 'MESAS', 'MESON', 'METAL', 'METER', 'METRO', 'MICRO', 'MIEDO', 'MIMAR',
    'MIRAR', 'MIRRA', 'MITOS', 'MIXTO', 'MOCHO', 'MODAS', 'MODOS', 'MOHIN', 'MOJAR',
    'MOLDE', 'MOLER', 'MOMIA', 'MONJE', 'MONTE', 'MORAL', 'MORAR', 'MORBO', 'MORSA',
    'MOSCA', 'MOTIN', 'MOVER', 'MUCHO', 'MUELA', 'MUJER', 'MUGIR', 'MULTA', 'MUNDO',
    'MURAL', 'MUROS', 'MUSGO', 'MUSLO', 'MUTUO',
    'NACER', 'NADAR', 'NADIE', 'NAIPE', 'NARDO', 'NARIZ', 'NATAL', 'NAVAL', 'NAVES',
    'NECIO', 'NEGAR', 'NEGRO', 'NIEVE', 'NINFA', 'NIVEL', 'NOBLE', 'NOCHE', 'NOGAL',
    'NORMA', 'NORIA', 'NORTE', 'NOTAS', 'NOVIA', 'NOVIO', 'NUBES', 'NUDEZ', 'NUDOS',
    'NUERA', 'NUEVE', 'NUEVO', 'NUNCA',
    'OBRAS', 'OBESO', 'OBRAR', 'OBVIO', 'OCEAN', 'OCASO', 'OCHOS', 'ODIAR', 'OESTE',
    'OIDOS', 'OJEAR', 'OLIVO', 'OLLAS', 'OMEGA', 'ONDAS', 'OPACO', 'OPERA', 'OPTAR',
    'ORDEN', 'OREJA', 'ORUJO', 'OSADO', 'OTEAR', 'OTRAS', 'OTROS', 'OVEJA', 'OXIDO',
    'PACTO', 'PADRE', 'PAGAR', 'PAGOS', 'PALAS', 'PALCO', 'PALMA', 'PALOS', 'PANDA', 
    'PANES',
    'PANEL', 'PAPAL', 'PAPEL', 'PARED', 'PARES', 'PARIA', 'PARIS', 'PARRA', 'PARTE',
    'PASAR', 'PASEO', 'PASOS', 'PASTA', 'PASTO', 'PATOS', 'PAUSA', 'PAUTA', 'PEAJE',
    'PECHO', 'PEDIR', 'PEGAR', 'PEINE', 'PELAR', 'PENAL', 'PENAS', 'PERLA', 'PEROL',
    'PERRO', 'PESAR', 'PESCA', 'PESOS', 'PIANO', 'PICAR', 'PIEZA', 'PILAR', 'PINOS',
    'PINTA', 'PIOJO', 'PIQUE', 'PISOS', 'PISTA', 'PLAGA', 'PLANO', 'PLATA', 'PLATO',
    'PLAYA', 'PLAZA', 'PLEBE', 'PLENO', 'PLOMO', 'PLUMA', 'POBRE', 'POCOS', 'PODER',
    'PODIO', 'POEMA', 'POETA', 'POLAR', 'POLEN', 'POLLO', 'POLVO', 'POMPA', 'PONER',
    'PORRA', 'POSAR', 'POSTE', 'POTRO', 'POZOS', 'PRADO', 'PRESO', 'PRIMO', 'PRISA',
    'PROLE', 'PROSA', 'PUDOR', 'PUJAR', 'PULGA', 'PULSO', 'PUNTA', 'PUNTO', 'PURGA',
    'PUROS',
    'QUEJA', 'QUESO', 'QUIEN',
    'RABIA', 'RACHA', 'RADIO', 'RAJAR', 'RAMAS', 'RAMPA', 'RANGO', 'RAPAR', 'RAPTO',
    'RAROS', 'RASGO', 'RASPA', 'RATON', 'RAYOS', 'RAZON', 'REATA', 'RECIA', 'RECIO',
    'RECTA', 'RECTO', 'REDIL', 'REGIO', 'REGLA', 'REINO', 'RELAX', 'RELOJ', 'REMAR',
    'REMOS', 'RENAL', 'RENTA', 'RESTO', 'RETAR', 'RETOS', 'REZAR', 'RIADA', 'RICOS',
    'RIEGO', 'RIFLE', 'RIGOR', 'RIMAR', 'RISAS', 'RITMO', 'RIVAL', 'ROBAR', 'ROBLE',
    'ROCAS', 'ROCIO', 'RODAR', 'RODEO', 'ROGAR', 'ROJOS', 'ROLLO', 'RONCO', 'RONDA',
    'ROPAS', 'ROSCA', 'ROSAS', 'ROTAR', 'ROTOS', 'RUBIO', 'RUBOR', 'RUEDA', 'RUIDO', 
    'RUINA',
    'RUMBA', 'RUMBO', 'RUMOR', 'RURAL', 'RUTAS',
    'SABER', 'SABIO', 'SABOR', 'SABLE', 'SACAR', 'SACOS', 'SAETA', 'SAGAZ', 'SALAS',
    'SALES', 'SALIR', 'SALMO', 'SALSA', 'SALUD', 'SALVO', 'SAMBA', 'SANAR', 'SANTO',
    'SAPOS', 'SAQUE', 'SARNA', 'SAUCE', 'SAUNA', 'SECOS', 'SECTA', 'SEDAS', 'SEGAR',
    'SELLO', 'SELVA', 'SENDA', 'SERIO', 'SESGO', 'SIDRA', 'SIEGA', 'SIGLA', 'SIGLO',
    'SIGNO', 'SILBO', 'SILLA', 'SITIO', 'SOBRE', 'SOCIO', 'SOLAR', 'SOLAZ', 'SOLER',
    'SOLOS', 'SONAR', 'SONDA', 'SOPOR', 'SORBO', 'SORDO', 'SUAVE', 'SUBIR', 'SUCIO',
    'SUDAR', 'SUELO', 'SUMAS', 'SUMOS', 'SUPER', 'SURCO',
    'TABLA', 'TACHA', 'TACOS', 'TACTO', 'TAJOS', 'TALAR', 'TALCO', 'TALLA', 'TALON',
    'TAMIZ', 'TANDA', 'TANGO', 'TAPAS', 'TAPAR', 'TAPIZ', 'TARDE', 'TAREA', 'TARRO',
    'TARSO', 'TARTA', 'TASAS', 'TAZAS', 'TECHO', 'TECLA', 'TEDIO', 'TEJAR', 'TEJON',
    'TELAS', 'TEMAS', 'TEMER', 'TEMOR', 'TENAZ', 'TENER', 'TENOR', 'TENSO', 'TERCO',
    'TERMO', 'TERSO', 'TESIS', 'TEXTO', 'TIARA', 'TIBIO', 'TIGRE', 'TIMBA', 'TIMON',
    'TINTA', 'TIPLE', 'TIRAR', 'TITAN', 'TOCAR', 'TOCHO', 'TOLDO', 'TOLVA', 'TOMAR',
    'TONAL', 'TONOS', 'TONTO', 'TOPOS', 'TOQUE', 'TORAX', 'TORNO', 'TOROS', 'TORPE',
    'TORRE', 'TORTA', 'TOSCO', 'TOSER', 'TOTAL', 'TRABA', 'TRAER', 'TRAGO', 'TRAJE',
    'TRAMO', 'TRAPO', 'TRATO', 'TRECE', 'TRIBU', 'TRIGO', 'TRIPA', 'TRONO', 'TROPA',
    'TROTE', 'TROZO', 'TRUCO', 'TRUFA', 'TUBOS', 'TUMBA', 'TUMBO', 'TUMOR', 'TURBA',
    'TURCO', 'TURNO', 'TUTOR',
    'ULEMA', 'ULTRA', 'UNGIR', 'UNICO', 'UNTAR', 'URANO', 'USURA', 'USUAL',
    'VACIO', 'VAGON', 'VAINA', 'VALER', 'VALLA', 'VALLE', 'VALOR', 'VALSA', 'VALVA',
    'VAMOS', 'VAPOR', 'VARAS', 'VARIO', 'VARON', 'VASOS', 'VASTO', 'VEDAR', 'VEJEZ',
    'VELAS', 'VELAR', 'VELLO', 'VELOS', 'VELOZ', 'VENAL', 'VENAS', 'VENIR', 'VENTA',
    'VENUS', 'VERBO', 'VERDE', 'VERJA', 'VERSO', 'VICIO', 'VIDAS', 'VIEJO', 'VIGOR',
    'VIGAS', 'VILLA', 'VINOS', 'VIRAL', 'VIRAR', 'VIRUS', 'VISOR', 'VISTA', 'VITAL',
    'VIUDA', 'VIVAR', 'VIVIR', 'VIVOS', 'VOCAL', 'VODKA', 'VOLAR', 'VORAZ', 'VOTAR',
    'VUELO',
    'YACER', 'YARDA', 'YEGUA', 'YEMAS', 'YERNO', 'YESOS', 'YUGOS',
    'ZAFAR', 'ZAFIO', 'ZAGAL', 'ZANJA', 'ZARCO', 'ZARPA', 'ZONAS', 'ZORRO', 'ZUMOS',
    'ZURDO', 'ZURRA'
];

const KEYBOARD_LAYOUT = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
];

let targetWord = WORDS[Math.floor(Math.random() * WORDS.length)];
let currentRow = 0;
let currentTile = 0;
let currentGuess = ['', '', '', '', ''];
let gameOver = false;
let startTime = Date.now();

// Racha de victorias con localStorage
let streak = parseInt(localStorage.getItem('palabra-streak') || '0', 10);

const gameBoard = document.getElementById('game-board');
const keyboard = document.getElementById('keyboard');
const messageEl = document.getElementById('message');

function saveStreak() {
    localStorage.setItem('palabra-streak', streak.toString());
}

function formatTime(totalSeconds) {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    if (h > 0) return `${h}h ${m}m ${s}s`;
    if (m > 0) return `${m}m ${s}s`;
    return `${s} segundos`;
}

function init() {
    createBoard();
    createKeyboard();
    createStreakDisplay();
    document.addEventListener('keydown', handleKeyPress);
}

function createStreakDisplay() {
    const el = document.createElement('div');
    el.id = 'streak-display';
    el.textContent = `🔥 Racha: ${streak}`;
    document.querySelector('header').appendChild(el);
}

function createBoard() {
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < 5; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.id = `tile-${i}-${j}`;
            tile.addEventListener('click', () => selectTile(i, j));
            row.appendChild(tile);
        }
        gameBoard.appendChild(row);
    }
}

function selectTile(row, col) {
    if (gameOver || row !== currentRow) return;
    currentTile = col;
    updateSelectedTile();
}

function updateSelectedTile() {
    // Quitar selección previa
    document.querySelectorAll('.tile.selected').forEach(t => t.classList.remove('selected'));
    if (gameOver) return;
    const tile = document.getElementById(`tile-${currentRow}-${currentTile}`);
    if (tile) tile.classList.add('selected');
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
        currentGuess[currentTile] = letter;
        currentTile++;
        updateSelectedTile();
    }
}

function deleteLetter() {
    if (currentGuess[currentTile] !== '') {
        // La casilla actual tiene letra: borrarla sin moverse
        const tile = document.getElementById(`tile-${currentRow}-${currentTile}`);
        tile.textContent = '';
        tile.classList.remove('filled');
        currentGuess[currentTile] = '';
    } else if (currentTile > 0) {
        // La casilla actual está vacía: retroceder y borrar la anterior
        currentTile--;
        const tile = document.getElementById(`tile-${currentRow}-${currentTile}`);
        tile.textContent = '';
        tile.classList.remove('filled');
        currentGuess[currentTile] = '';
        updateSelectedTile();
    }
}

function getGuessWord() {
    return currentGuess.join('');
}

function isGuessComplete() {
    return currentGuess.every(c => c !== '');
}

function submitGuess() {
    if (!isGuessComplete()) {
        showMessage('Palabra incompleta');
        return;
    }

    const word = getGuessWord();

    if (!WORDS.includes(word)) {
        showMessage('Palabra no válida');
        shakeTiles();
        return;
    }

    checkGuess(word);

    if (word === targetWord) {
        gameOver = true;
        streak++;
        saveStreak();
        document.querySelectorAll('.tile.selected').forEach(t => t.classList.remove('selected'));
        setTimeout(() => showModal(true), 500);
        return;
    }

    currentRow++;
    currentTile = 0;
    currentGuess = ['', '', '', '', ''];
    updateSelectedTile();

    if (currentRow === 6) {
        gameOver = true;
        streak = 0;
        saveStreak();
        document.querySelectorAll('.tile.selected').forEach(t => t.classList.remove('selected'));
        setTimeout(() => showModal(false), 500);
    }
}

function checkGuess(word) {
    const letterCount = {};
    for (let letter of targetWord) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    const result = Array(5).fill('absent');

    for (let i = 0; i < 5; i++) {
        if (word[i] === targetWord[i]) {
            result[i] = 'correct';
            letterCount[word[i]]--;
        }
    }

    for (let i = 0; i < 5; i++) {
        if (result[i] === 'absent' && targetWord.includes(word[i]) && letterCount[word[i]] > 0) {
            result[i] = 'present';
            letterCount[word[i]]--;
        }
    }

    for (let i = 0; i < 5; i++) {
        const tile = document.getElementById(`tile-${currentRow}-${i}`);
        const letter = word[i];

        setTimeout(() => {
            tile.classList.add(result[i]);
            updateKeyboard(letter, result[i]);
        }, i * 100);
    }
}

function updateKeyboard(letter, status) {
    const key = document.querySelector(`[data-key="${letter}"]`);
    if (!key) return;

    if (key.classList.contains('correct')) return;

    if (status === 'correct') {
        key.classList.remove('present', 'absent');
        key.classList.add('correct');
    } else if (status === 'present' && !key.classList.contains('present')) {
        key.classList.remove('absent');
        key.classList.add('present');
    } else if (status === 'absent' && !key.classList.contains('present')) {
        key.classList.add('absent');
    }
}

function shakeTiles() {
    for (let i = 0; i < 5; i++) {
        const tile = document.getElementById(`tile-${currentRow}-${i}`);
        if (tile) {
            tile.style.animation = 'none';
            tile.offsetHeight; // force reflow
            tile.style.animation = 'shake 0.5s ease';
        }
    }
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
    const timeStr = formatTime(elapsed);
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';

    const content = document.createElement('div');
    content.className = 'modal-content';

    if (won) {
        content.innerHTML = `
            <button class="modal-close" aria-label="Cerrar">✕</button>
            <h2>🎉 ¡Felicidades! 🎉</h2>
            <p class="time">Tiempo: ${timeStr}</p>
            <p class="streak">🔥 Racha: ${streak} victoria${streak !== 1 ? 's' : ''} seguida${streak !== 1 ? 's' : ''}</p>
            <button class="restart-btn" onclick="location.reload()">Jugar de nuevo</button>
        `;
    } else {
        content.innerHTML = `
            <button class="modal-close" aria-label="Cerrar">✕</button>
            <h2>😔 Perdiste</h2>
            <p class="word">La palabra era: <strong>${targetWord}</strong></p>
            <p class="time">Tiempo: ${timeStr}</p>
            <p class="streak">🔥 Racha perdida</p>
            <button class="restart-btn" onclick="location.reload()">Jugar de nuevo</button>
        `;
    }

    content.querySelector('.modal-close').addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
        showNewGameButton();
    });

    modal.appendChild(content);
    document.body.appendChild(modal);

    setTimeout(() => modal.classList.add('show'), 10);
}

function showNewGameButton() {
    if (document.getElementById('new-game-btn')) return;
    const btn = document.createElement('button');
    btn.id = 'new-game-btn';
    btn.className = 'restart-btn new-game-btn';
    btn.textContent = 'Nueva partida';
    btn.addEventListener('click', () => location.reload());
    document.querySelector('.container').appendChild(btn);
}

init();
