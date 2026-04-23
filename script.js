// ============================================================
// CONFIGURACIÓN: ENLACES DE GOOGLE DRIVE POR GRADO Y CURSO
// ============================================================
// Estructura: driveLinks[grado][idCurso] = "URL"
// grados: "1ro", "2do", "3ro", "4to", "5to"
// idCurso: del 1 al 23 (ver lista de cursos más abajo)
//
// INSTRUCCIONES: Reemplaza las URL de ejemplo con tus enlaces reales de Drive.
// ============================================================

const driveLinks = {
    // ========== 1RO SECUNDARIA ==========
    "1ro": {
        2: "https://docs.google.com/presentation/d/1o2AOIQUpvcX4Va1FrFtuIZW9HNxTxzHd/edit?usp=drive_link", // Geografía
        3: "https://docs.google.com/presentation/d/1gIbKlDqnmERjP9XpLVGoGgfB1dBTVPSr/edit?usp=drive_link", // Historia del Perú
        6: "https://docs.google.com/presentation/d/1a2xd4ELl4J-2l0Ie-iEUHUUyWp8wTD4w/edit?usp=drive_link", // Valores
        7: "https://docs.google.com/presentation/d/1IptlPfd9NJbUVfCb3Ep4cDHtcuX8mFwL/edit?usp=drive_link", // Fortaleciendo mi Fe
        8: "https://docs.google.com/presentation/d/1QXSfIX4FgRPIcwnmEh_L_d-hW8dWeAAl/edit?usp=drive_link", // Lenguaje
        9: "https://docs.google.com/presentation/d/14hk1xVhSgdBIL5bZmtRIrunb3hpy1rmL/edit?usp=drive_link", // Literatura
        10: "https://docs.google.com/presentation/d/1jsunZ0KYD-BVhektpZKlio5VhDbEKAm8/edit?usp=drive_link", // Razonamiento Verbal
        11: "https://docs.google.com/presentation/d/1XQyGGi-8U90ADa-VqFi0WdADy6ZeDdzC/edit?usp=drive_link", // Teatro
        12: "https://docs.google.com/presentation/d/1mfOCpPI-mQMEQ-W7-AXz8kh4Weto4cU2/edit?usp=drive_link", // Tutoría
        13: "https://docs.google.com/presentation/d/1BkOH8IkGspQ6iLkLZ2S8y52pwOclS6BG/edit?usp=drive_link", // Biología
        14: "https://docs.google.com/presentation/d/135FpCFMntWfRkiyDNbv0CKeTr1Pgfnax/edit?usp=drive_link", // Física
        15: "https://docs.google.com/presentation/d/1cl60JwAI8Yd6rO5w6n-oP1haMwr6Qfy9/edit?usp=drive_link", // Química
        16: "https://docs.google.com/presentation/d/1xE4KlShuferybXwfdnvF8_wus6dmLtpV/edit?usp=drive_link", // Álgebra Sesión 1
        17: "https://docs.google.com/presentation/d/1bCQ1k2vCXPvJUbHfee_gEWnXx1nE20D9/edit?usp=drive_link", // Aritmética Sesión 1
        18: "https://docs.google.com/presentation/d/1fBJY5eaA_4SfzZKFVPMHQAwzwOw8Bca2/edit?usp=drive_link", // Geometría
        19: "https://docs.google.com/presentation/d/120A-371XMDTZR2RotwWMqaHhcYKDX1-9/edit?usp=drive_link", // Razonamiento Matemático
        20: "https://docs.google.com/presentation/d/1_WrM1udu_KK16Ew-faOjqmX7A-jA1zGM/edit?usp=drive_link", // Trigonometría
        21: "https://docs.google.com/presentation/d/1LcG0EEyoKML_g8SkgyTu6xyyBWLJjU9R/edit?usp=drive_link" // Aritmética Sesión 2
    },
    // ========== 2DO SECUNDARIA ==========
    "2do": {
        2: "https://docs.google.com/presentation/d/1McOup7GlzAGXGNZVHRMlzB1BGMP6F14w/edit?usp=drive_link", // Geografía
        3: "https://docs.google.com/presentation/d/1eneFN2DbR3AyCXvdSFVz654lkT0GneQB/edit?usp=drive_link", // Historia del Perú
        6: "https://docs.google.com/presentation/d/19if8KLDtMnqjwDydm_48A6SAYQBu2-U5/edit?usp=drive_link", // Valores
        7: "https://docs.google.com/presentation/d/1R5G_updzfz0CQo5mxsw33xYeqxdzyLBW/edit?usp=drive_link", // Fortaleciendo mi Fe
        8: "https://docs.google.com/presentation/d/1scUXyrwevY9tMGdRqcuK3tjiLYV9ROkJ/edit?usp=drive_link", // Lenguaje
        9: "https://docs.google.com/presentation/d/1bKI3SgezA5VEldU3eyTDLuf3I3gEX0KW/edit?usp=drive_link", // Literatura
        10: "https://docs.google.com/presentation/d/13GgVXTtxD0ZBbqHdIFF8ryRd9EjW76XO/edit?usp=drive_link", // Razonamiento Verbal
        11: "https://docs.google.com/presentation/d/1qH7QAmhUhv93b5G61BlxpPJi7tc630t7/edit?usp=drive_link", // Teatro
        12: "https://docs.google.com/presentation/d/1hR_IaisVZjKN0avkTAMbV-PCrJn3fdI2/edit?usp=drive_link", // Tutoría
        13: "https://docs.google.com/presentation/d/1qGxezVuL5I9JNBYDix7EBuD6ZIJyYflC/edit?usp=drive_link", // Biología
        14: "https://docs.google.com/presentation/d/1I5_slskXAvUxbUMFpjmBtfCX-A19Aysc/edit?usp=drive_link", // Física
        15: "https://docs.google.com/presentation/d/1gBY7XfNjYXB30eRTz5iVwtDlNx3d6BTK/edit?usp=drive_link", // Química
        16: "https://docs.google.com/presentation/d/1MWXxmRohPMJ1xnzoDY3q62TzMXJqJh7D/edit?usp=drive_link", // Álgebra Sesión 1
        17: "https://docs.google.com/presentation/d/1M_WdvJ3f2KJv3LCylOJIP1g5IkW2Vqt8/edit?usp=drive_link", // Aritmética Sesión 1
        18: "https://docs.google.com/presentation/d/11cgdDC3mSxt25aDz4fnpbH9NoK4sKVIS/edit?usp=drive_link", // Geometría
        19: "https://docs.google.com/presentation/d/1L4wAqrAJNuO3IE36XRLIV049-geC6A7w/edit?usp=drive_link", // Razonamiento Matemático
        20: "https://docs.google.com/presentation/d/11vmrxAgYq8r35PQeNbGYp8E6kmauH-GR/edit?usp=drive_link", // Trigonometría
        22: "https://docs.google.com/presentation/d/1gxGoQlRsjALydvp5cFqoZNT5RD-_LLSQ/edit?usp=drive_link" // Álgebra Sesión 2
    },
    // ========== 3RO SECUNDARIA ==========
    "3ro": {
        1: "https://docs.google.com/presentation/d/1Yk4hU1cH8YR90OERunpstD999brVeN6m/edit?usp=drive_link", // Economía
        2: "https://docs.google.com/presentation/d/1GD8p2X9WmT_gocllCy5DKAvHBwG8f6eA/edit?usp=drive_link", // Geografía
        3: "https://docs.google.com/presentation/d/1UKFL-ZMCBA3wJYVEXVvsXWVomzjtH9Zq/edit?usp=drive_link", // Historia del Perú
        4: "https://docs.google.com/presentation/d/1Ego-4SRdJUFsnaq2z6lDoUQ6UAOQHSkR/edit?usp=drive_link", // Historia Universal
        5: "https://docs.google.com/presentation/d/1F8rrvKkEJN2H-C6evl5uHT2T7BtGApYo/edit?usp=drive_link", // Psicología
        7: "https://docs.google.com/presentation/d/1W9_RNqR_s7Qnl-oOlEuonArFnPFl5v6U/edit?usp=drive_link", // Fortaleciendo mi Fe
        8: "https://docs.google.com/presentation/d/1ikrE40GBM1_D-oz-glPKdWIgD6yGNpo2/edit?usp=drive_link", // Lenguaje
        9: "https://docs.google.com/presentation/d/1Q2RNaZ9NcyhYxNF-KnV2De9yTx6aqSz7/edit?usp=drive_link", // Literatura
        10: "https://docs.google.com/presentation/d/1w9UYnCxRaAvNzV8NhPBJnVRSNj6cf92u/edit?usp=drive_link", // Razonamiento Verbal
        12: "https://docs.google.com/presentation/d/1_9WGrfPF0Ct4mtdb40q-kmouylsYICWl/edit?usp=drive_link", // Tutoría
        13: "https://docs.google.com/presentation/d/13xlKEKYR1by7whYoldUmB5f1ktzr5Eif/edit?usp=drive_link", // Biología
        14: "https://docs.google.com/presentation/d/1AiwcVnQz2xjCAL5Gs-WNia2qAVWhyk1R/edit?usp=drive_link", // Física
        15: "https://docs.google.com/presentation/d/1nbNlwwPn6dybRcLHJg8oHabHR_6urRvv/edit?usp=drive_link", // Química
        16: "https://docs.google.com/presentation/d/1oJhQw876oKkhzde2-qQWaMj0V4fC85ZK/edit?usp=drive_link", // Álgebra
        17: "https://docs.google.com/presentation/d/1uAvJkCGIRpejtaJaorgP9TB5o2W4aACW/edit?usp=drive_link", // Aritmética
        18: "https://docs.google.com/presentation/d/1QipkiLf6rdyRiTDenn1XWQENLk82TN8I/edit?usp=drive_link", // Geometría
        19: "https://docs.google.com/presentation/d/1RB_mKwBSeTwXF8t-4xBhdnBBEN0Pec6Z/edit?usp=drive_link", // Razonamiento Matemático
        20: "https://docs.google.com/presentation/d/1c2yyLDzoBuxu_-Q_LmGMqnV8s6x4-fYp/edit?usp=drive_link" // Trigonometría
    },
    // ========== 4TO SECUNDARIA ==========
    "4to": {
        1: "https://docs.google.com/presentation/d/1w4u-_cS4JpWI0BrxVFPbrkzxZoms1Gmm/edit?usp=drive_link", // Economía
        2: "https://docs.google.com/presentation/d/17aQBMFEHNBn8O0O1J2UpL4Tvnlx6tPY-/edit?usp=drive_link", // Geografía
        3: "https://docs.google.com/presentation/d/1L5A9YmC1D6UfpRQk7uw4rCyhg2LBYOE8/edit?usp=drive_link", // Historia del Perú
        4: "https://docs.google.com/presentation/d/1GxRp0WYv8P77uK9sb1ixX-aO8qIhuLe1/edit?usp=drive_link", // Historia Universal
        5: "https://docs.google.com/presentation/d/19Hx3-9ADYWfxCRLxrjddr3DCG2O7fS_U/edit?usp=drive_link", // Psicología
        7: "https://docs.google.com/presentation/d/1d7-80Yz8ty3DLYISBl9T7e2IIwoOhiXN/edit?usp=drive_link", // Fortaleciendo mi Fe
        8: "https://docs.google.com/presentation/d/1EdmyGmCwFbLPjgA4776AtVjF2GG4OI4b/edit?usp=drive_link", // Lenguaje
        9: "https://docs.google.com/presentation/d/1eofStF0Im0UA2d1PSILm_4CehDx4dUQh/edit?usp=drive_link", // Literatura
        10: "https://docs.google.com/presentation/d/13xaZ7cPHgXwKDgnuecidFB2ITVUjhpwI/edit?usp=drive_link", // Razonamiento Verbal
        12: "https://docs.google.com/presentation/d/1k4kUeHnHGuzl8AGxhQzGuxAkAXPfcQqi/edit?usp=drive_link", // Tutoría
        13: "https://docs.google.com/presentation/d/131F5G1xTSydEF8SM25ZyOqSs3vlsdn0w/edit?usp=drive_link", // Biología
        14: "https://docs.google.com/presentation/d/1madmDIZg1A4t7oyd5NwHdnZ9kagUN0h6/edit?usp=drive_link", // Física
        15: "https://docs.google.com/presentation/d/1Cxew4ytysH4aik7upjnwMFKoriYAKB45/edit?usp=drive_link", // Química
        16: "https://docs.google.com/presentation/d/1J1f3rMX5sx5q_WIFMlXYOkA7q83kfJHZ/edit?usp=drive_link", // Álgebra
        17: "https://docs.google.com/presentation/d/1qN8ZVgPAj55i7qZ3a7XHkCowLKbtz3v8/edit?usp=drive_link", // Aritmética
        18: "https://docs.google.com/presentation/d/1IoJ_cEOUG_DT72CGgwkRaxOk3R7ABHsD/edit?usp=drive_link", // Geometría
        19: "https://docs.google.com/presentation/d/1XcYwoZwjAc47vybBrv_tzITNp1ZfpXM5/edit?usp=drive_link", // Razonamiento Matemático
        20: "https://docs.google.com/presentation/d/1dtNwX2ueTzfToLqj8oXppzqrwdhXz65v/edit?usp=drive_link" // Trigonometría
    },
    // ========== 5TO SECUNDARIA ==========
    "5to": {
        1: "https://docs.google.com/presentation/d/1F0HsLlLuZthiG_uNwFwon7nzXUiuG_bA/edit?usp=drive_link", // Economía
        2: "https://docs.google.com/presentation/d/1L_J16S4RNHfhSVr5bGTNXssSo7UgCYcG/edit?usp=drive_link", // Geografía
        3: "https://docs.google.com/presentation/d/17Levj49Oj7hNPav0XDzXRIz9zCzXIEwS/edit?usp=drive_link", // Historia del Perú
        4: "https://docs.google.com/presentation/d/1z3GD2uU9tTCyFjoCQpzQWG6xncHtrh6M/edit?usp=drive_link", // Historia Universal
        5: "https://docs.google.com/presentation/d/14brXh2FTNToiDN_qutiOhys8x9OcIveT/edit?usp=drive_link", // Psicología
        7: "https://docs.google.com/presentation/d/1MYFJPxEJcjo846f7tkamqvFinT3H3rzP/edit?usp=drive_link", // Fortaleciendo mi Fe
        8: "https://docs.google.com/presentation/d/1ROGFvA_lVmie_0DajMxB6pVg5aPYSy_S/edit?usp=drive_link", // Lenguaje
        9: "https://docs.google.com/presentation/d/1_BL4XCSmLpERZ4WlVY-mqLY5LL0PmjJ6/edit?usp=drive_link", // Literatura
        10: "https://docs.google.com/presentation/d/1WroQN2jjBFyykSB4ShU_m0S1nhHRCG5q/edit?usp=drive_link", // Razonamiento Verbal
        12: "https://docs.google.com/presentation/d/18g5qrMBKYuHIpU_qqe2AcFQX657a4__p/edit?usp=drive_link", // Tutoría
        13: "https://docs.google.com/presentation/d/1hjtHRSk8Ha40SBSIDYScPUS-I4lcsAAc/edit?usp=drive_link", // Biología
        14: "https://docs.google.com/presentation/d/1p2PcOfypJBjchOQ-qssNImUBHndvIMu4/edit?usp=drive_link", // Física
        15: "https://docs.google.com/presentation/d/18gZ7jk5r1ebIkiSjYCuRT174oSWzza9h/edit?usp=drive_link", // Química
        16: "https://docs.google.com/presentation/d/1LNYyqHX35fGdnvIH_ouzoVn32U2HyMRh/edit?usp=drive_link", // Álgebra
        17: "https://docs.google.com/presentation/d/1I9LUTqbxY6AIGG8essbOQTkTYoYdy9fY/edit?usp=drive_link", // Aritmética
        18: "https://docs.google.com/presentation/d/1zUJvIq8MqLbnWtpF7t5zJMiex3HWa3br/edit?usp=drive_link", // Geometría
        19: "https://docs.google.com/presentation/d/1aY2gxA_8R-QtPPipK0BLJ_8pUJ-yFL7K/edit?usp=drive_link", // Razonamiento Matemático
        20: "https://docs.google.com/presentation/d/1m-znvkBpIkJpTyk2TU9M4KnY-GcInm7F/edit?usp=drive_link", // Trigonometría
        23: "https://docs.google.com/presentation/d/1kknDPzOi43dc6FwaiwqNlzmqnYxDlhdX/edit?usp=drive_link" // Razonamiento Verbal 2
    }
};

// ============================================================
// LISTA DE CURSOS (20 asignaturas con área y descripción)
// ============================================================
const courses = [
    // Ciencias Sociales
    { id: 1, name: "Economía", description: "Sistemas económicos, oferta y demanda, mercado y finanzas.", icon: "fas fa-chart-line", color: "#2d6a4f", area: "sociales" },
    { id: 2, name: "Geografía", description: "Relieve, clima, recursos naturales y cartografía.", icon: "fas fa-globe-americas", color: "#40916c", area: "sociales" },
    { id: 3, name: "Historia del Perú", description: "Culturas preincas, imperio inca, conquista y república.", icon: "fas fa-landmark", color: "#dda15e", area: "sociales" },
    { id: 4, name: "Historia Universal", description: "Edades históricas, guerras mundiales y civilizaciones antiguas.", icon: "fas fa-monument", color: "#bc6c25", area: "sociales" },
    { id: 5, name: "Psicología", description: "Procesos mentales, emociones, desarrollo humano y conducta.", icon: "fas fa-brain", color: "#ff006e", area: "sociales" },
    { id: 6, name: "Valores", description: "Ética, moral, formación ciudadana y convivencia.", icon: "fas fa-heart", color: "#e63946", area: "sociales" },
    // Comunicación
    { id: 7, name: "Fortaleciendo mi Fe", description: "Formación espiritual y valores cristianos.", icon: "fas fa-church", color: "#9c27b0", area: "comunicacion" },
    { id: 8, name: "Lenguaje", description: "Gramática, comunicación, comprensión lectora y redacción.", icon: "fas fa-spell-check", color: "#3a86ff", area: "comunicacion" },
    { id: 9, name: "Literatura", description: "Géneros literarios, autores, obras y análisis textual.", icon: "fas fa-book-open", color: "#8338ec", area: "comunicacion" },
    { id: 10, name: "Razonamiento Verbal", description: "Sinónimos, antónimos, analogías verbales y comprensión.", icon: "fas fa-comment-alt", color: "#588157", area: "comunicacion" },
    { id: 23, name: "Razonamiento Verbal 2", description: "Sinónimos, antónimos, analogías verbales y comprensión.", icon: "fas fa-comment-alt", color: "#588157", area: "comunicacion" },
    { id: 11, name: "Teatro", description: "Expresión corporal, actuación, obras teatrales y creatividad.", icon: "fas fa-mask", color: "#d62828", area: "comunicacion" },
    { id: 12, name: "Tutoría", description: "Orientación personal, desarrollo de habilidades socioemocionales.", icon: "fas fa-hand-holding-heart", color: "#f4a261", area: "comunicacion" },
    // Ciencia y Tecnología
    { id: 13, name: "Biología", description: "Células, seres vivos, ecosistemas y anatomía humana.", icon: "fas fa-dna", color: "#2a9d8f", area: "ciencia" },
    { id: 14, name: "Física", description: "Movimiento, fuerzas, energía, ondas y electricidad.", icon: "fas fa-atom", color: "#9d4edd", area: "ciencia" },
    { id: 15, name: "Química", description: "Elementos, compuestos, reacciones y tabla periódica.", icon: "fas fa-flask", color: "#fb5607", area: "ciencia" },
    // Matemática
    { id: 16, name: "Álgebra", description: "Expresiones algebraicas, ecuaciones, funciones y polinomios.", icon: "fas fa-square-root-alt", color: "#e63946", area: "matematica" },
    { id: 22, name: "Álgebra Sesión 2", description: "Expresiones algebraicas avanzadas, funciones y polinomios.", icon: "fas fa-square-root-alt", color: "#e63946", area: "matematica" },
    { id: 17, name: "Aritmética", description: "Números, operaciones básicas, fracciones, decimales y más.", icon: "fas fa-calculator", color: "#0a4d8c", area: "matematica" },
    { id: 21, name: "Aritmética Sesión 2", description: "Números, operaciones básicas, fracciones, decimales y más.", icon: "fas fa-calculator", color: "#0a4d8c", area: "matematica" },
    { id: 18, name: "Geometría", description: "Figuras geométricas, medición, propiedades y transformaciones.", icon: "fas fa-draw-polygon", color: "#3a86ff", area: "matematica" },
    { id: 19, name: "Razonamiento Matemático", description: "Problemas lógicos, secuencias, analogías y patrones.", icon: "fas fa-puzzle-piece", color: "#3d405b", area: "matematica" },
    { id: 20, name: "Trigonometría", description: "Triángulos, funciones trigonométricas, identidades y aplicaciones.", icon: "fas fa-shapes", color: "#1d3557", area: "matematica" }
];

// Nombres de áreas para mostrar en badge
const areaNames = {
    sociales: "Ciencias Sociales",
    comunicacion: "Comunicación",
    ciencia: "Ciencia y Tecnología",
    matematica: "Matemática"
};

// Grados disponibles
const grades = [
    { id: "1ro", name: "1ro Secundaria", icon: "fas fa-star" },
    { id: "2do", name: "2do Secundaria", icon: "fas fa-star" },
    { id: "3ro", name: "3ro Secundaria", icon: "fas fa-star" },
    { id: "4to", name: "4to Secundaria", icon: "fas fa-star" },
    { id: "5to", name: "5to Secundaria", icon: "fas fa-star" }
];

// Estado actual
let currentGrade = null;

// Elementos DOM
const gradeButtonsContainer = document.getElementById('grade-buttons');
const coursesContainer = document.getElementById('courses-container');

// Función para generar botones de grados
function generateGradeButtons() {
    gradeButtonsContainer.innerHTML = '';
    grades.forEach(grade => {
        const btn = document.createElement('button');
        btn.className = `selector-btn grade-btn ${currentGrade === grade.id ? 'active' : ''}`;
        btn.dataset.id = grade.id;
        btn.innerHTML = `<i class="${grade.icon}"></i><span>${grade.name}</span>`;
        btn.addEventListener('click', () => {
            currentGrade = grade.id;
            generateGradeButtons();
            renderCourses();
        });
        gradeButtonsContainer.appendChild(btn);
    });
}

// Función para renderizar los cursos del grado seleccionado
function renderCourses() {
    coursesContainer.innerHTML = '';
    
    if (!currentGrade) {
        coursesContainer.innerHTML = '<div class="no-results"><i class="fas fa-arrow-up"></i><p>Selecciona un grado para ver los cursos disponibles.</p></div>';
        return;
    }

    // Obtener los enlaces del grado seleccionado
    const gradeLinks = driveLinks[currentGrade];
    
    if (!gradeLinks) {
        coursesContainer.innerHTML = '<div class="no-results"><i class="fas fa-exclamation-triangle"></i><p>No hay materiales disponibles para este grado.</p></div>';
        return;
    }

    // Filtrar cursos que tienen enlace en este grado
    const availableCourses = courses.filter(course => gradeLinks[course.id] !== undefined);
    
    if (availableCourses.length === 0) {
        coursesContainer.innerHTML = '<div class="no-results"><i class="fas fa-folder-open"></i><p>No hay materiales disponibles para este grado.</p></div>';
        return;
    }

    // Generar tarjetas para cada curso
    availableCourses.forEach(course => {
        const link = gradeLinks[course.id];
        const areaNameDisplay = areaNames[course.area] || course.area;
        
        const card = document.createElement('div');
        card.className = 'course-card';
        
        card.innerHTML = `
            <div class="card-header">
                <div class="course-icon" style="background: ${course.color}20;">
                    <i class="${course.icon}" style="color: ${course.color}"></i>
                </div>
                <div class="course-title">
                    <h3>${course.name}</h3>
                    <span class="area-badge">${areaNameDisplay}</span>
                </div>
            </div>
            <div class="card-body">
                <p class="course-description">${course.description}</p>
                <a href="${link}" target="_blank" class="drive-link">
                    <i class="fab fa-google-drive"></i> Abrir en Google Drive
                </a>
            </div>
        `;
        
        coursesContainer.appendChild(card);
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    generateGradeButtons();
    renderCourses();
});