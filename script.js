/* -------------------- BACKEND (API de libros con TOMOS) -------------------- */
const LIBRARY_API = (function() {
    // Distribución de documentos por TOMOS
    // TOMO I: Documentos bk001 a bk005
    // TOMO II: bk006 a bk010
    // TOMO III: bk011 a bk015
    // TOMO IV: bk016 a bk020
    // TOMO V: bk021 a bk025
    // TOMO VI - VIII: Se pueden agregar más documentos en el futuro
    
    const rawBooks = [
        // ========== AULAS REGULARES TOMO I ==========
        // ========== 1ERO SECUNDARIA
        { id: "bk001", title: "Tomo I - Aritmética", author: "DIRAGE", category: "Aulas Regulares - 1ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/16hmUNs6z1_2Ad-R0bpzZMCLuRzsQy_8y/view?usp=drive_link" },//Aritmética
        { id: "bk002", title: "Tomo I - Álgebra", author: "DIRAGE", category: "Aulas Regulares - 1ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1PkAMbSfkI5xuzuiceyo7Z8FIoKsaXTDw/view?usp=drive_link" },//Álgebra
        { id: "bk003", title: "Tomo I - Geometría", author: "DIRAGE", category: "Aulas Regulares - 1ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/12J-bN9ExwAP6iolPcluvOMJ8HLQuR1nD/view?usp=drive_link" },//Geometría
        { id: "bk004", title: "Tomo I - Trigonometría", author: "DIRAGE", category: "Aulas Regulares - 1ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1Oiep4gpdoM7L3N2IM_sk2DnxoNlcSTBd/view?usp=drive_link" },//Trigonometría
        { id: "bk005", title: "Tomo I - Razonamiento Matemático", author: "DIRAGE", category: "Aulas Regulares - 1ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1vu5dTLYYh9JRIXEPkIt3wYSbuM2-zUGC/view?usp=drive_link" },//RM
        { id: "bk006", title: "Tomo I - Física", author: "DIRAGE", category: "Aulas Regulares - 1ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1-t1lbHCI7W1aFhtVw68lQDAHjLxJ2e7d/view?usp=drive_link" },//Física
        { id: "bk007", title: "Tomo I - Química", author: "DIRAGE", category: "Aulas Regulares - 1ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1XqCraUd-glH14TZ5yorr3KjZoF15YyvJ/view?usp=drive_link" },//Química
        { id: "bk008", title: "Tomo I - Biología", author: "DIRAGE", category: "Aulas Regulares - 1ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Biología
        { id: "bk009", title: "Tomo I - Lenguaje", author: "DIRAGE", category: "Aulas Regulares - 1ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Lenguaje
        { id: "bk010", title: "Tomo I - Literatura", author: "DIRAGE", category: "Aulas Regulares - 1ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Literatura
        { id: "bk011", title: "Tomo I - Razonamiento verbal", author: "DIRAGE", category: "Aulas Regulares - 1ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//RV
        { id: "bk012", title: "Tomo I - Teatro", author: "DIRAGE", category: "Aulas Regulares - 1ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Teatro
        { id: "bk013", title: "Tomo I - Historia del Perú", author: "DIRAGE", category: "Aulas Regulares - 1ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Hp
        { id: "bk014", title: "Tomo I - Geografía", author: "DIRAGE", category: "Aulas Regulares - 1ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Geografía
        { id: "bk015", title: "Tomo I - Valores", author: "DIRAGE", category: "Aulas Regulares - 1ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Valores
        { id: "bk016", title: "Tomo I - Fortaleciendo Mi Fé", author: "DIRAGE", category: "Aulas Regulares - 1ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//FmiFE
        // ========== 2DO SECUNDARIA
        { id: "bk017", title: "Tomo I - Aritmética", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1b9lO734tnMQpu2zOG6Zi49c_aRK_-MEr/view?usp=drive_link" },//Aritmética
        { id: "bk018", title: "Tomo I - Álgebra", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1QCfabnwdZp2MyouD9dBazmainb9pq3ox/view?usp=drive_link" },//Álgebra
        { id: "bk019", title: "Tomo I - Geometría", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1DeWup271MmnT3kELXzOMV4R0cRPLm3xo/view?usp=drive_link" },//Geometría
        { id: "bk020", title: "Tomo I - Trigonometría", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1Hl_U6dVdMNH7rH7CDwuWTJUkX3gWop28/view?usp=drive_link" },//Trigonometría
        { id: "bk021", title: "Tomo I - Razonamiento Matemático", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1EfEznOeu5X2D0b01Gwf-M72uklut8sFo/view?usp=drive_link" },//RM
        { id: "bk022", title: "Tomo I - Física", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/199lYxBq9Hz7J4T0CmTcPXMX7M1KmHv85/view?usp=drive_link" },//Física
        { id: "bk023", title: "Tomo I - Química", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1hCS2dmCqavku1JXqJH8hUCPpzuLAQWb_/view?usp=drive_link" },//Química
        { id: "bk024", title: "Tomo I - Biología", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Biología
        { id: "bk025", title: "Tomo I - Lenguaje", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Lenguaje
        { id: "bk026", title: "Tomo I - Literatura", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Literatura
        { id: "bk027", title: "Tomo I - Razonamiento verbal", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//RV
        { id: "bk028", title: "Tomo I - Teatro", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Teatro
        { id: "bk029", title: "Tomo I - Historia del Perú", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Hp
        { id: "bk030", title: "Tomo I - Geografía", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Geografía
        { id: "bk031", title: "Tomo I - Valores", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Valores
        { id: "bk032", title: "Tomo I - Fortaleciendo Mi Fé", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//fmife
        //========== 3ERO SECUNDARIA
        { id: "bk033", title: "Tomo I - Aritmética", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/16wPaDyB8sn6_jmDWbw5HiE_RYnnmV17y/view?usp=drive_link" },//Aritmética
        { id: "bk034", title: "Tomo I - Álgebra", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1NXyVJTWHpPuHFVmDv0a9XMQI5Xoj92-8/view?usp=drive_link" },//Álgebra
        { id: "bk035", title: "Tomo I - Geometría", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1D9Z7X2s4zIGofk1gUo7aPNj7y_EMp8Eb/view?usp=drive_link" },//Geometría
        { id: "bk036", title: "Tomo I - Trigonometría", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1z20148YrRAd91P5IFOW3w_EqSImGwNYL/view?usp=drive_link" },//Trigonometría
        { id: "bk037", title: "Tomo I - Razonamiento Matemático", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1rCm0vyNVxICHtsD6wP7t0pgbq4dZyE9q/view?usp=drive_link" },//RM
        { id: "bk038", title: "Tomo I - Física", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1gTHUmBpNbKs24GXJ9gzDuFmMH5Hnx05s/view?usp=drive_link" },//Física
        { id: "bk039", title: "Tomo I - Química", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1UwnccTJw22LQR0v9O1DayR1xI-o00_uR/view?usp=drive_link" },//Química
        { id: "bk040", title: "Tomo I - Biología", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Biología
        { id: "bk041", title: "Tomo I - Lenguaje", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Lenguaje
        { id: "bk042", title: "Tomo I - Literatura", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Literatura
        { id: "bk043", title: "Tomo I - Razonamiento verbal", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//RV
        { id: "bk044", title: "Tomo I - Historia del Perú", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Hp
        { id: "bk045", title: "Tomo I - Geografía", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Geografía
        { id: "bk046", title: "Tomo I - Historia Universal", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//hu
        { id: "bk047", title: "Tomo I - Economía", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//economia
        { id: "bk048", title: "Tomo I - Psicología", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//psicologia
        { id: "bk049", title: "Tomo I - Fortaleciendo Mi Fé", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//fmife
        //========== 4TO SECUNDARIA
        { id: "bk050", title: "Tomo I - Aritmética", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/13hkf-MXSuJgAsBsT04b9WpMsxmOiE3oa/view?usp=drive_link" },//Aritmética
        { id: "bk051", title: "Tomo I - Álgebra", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/11ANWbz7ImZpR6Axfm6mctZn56ehTE7yj/view?usp=drive_link" },//Álgebra
        { id: "bk052", title: "Tomo I - Geometría", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1MYxfFfQp-skc7vb_uQp6FWyqnqtkLkwB/view?usp=drive_link" },//Geometría
        { id: "bk053", title: "Tomo I - Trigonometría", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1ijxOLxfhRp7Mk_uLnifJUn6J5_nAmeIa/view?usp=drive_link" },//Trigonometría
        { id: "bk054", title: "Tomo I - Razonamiento Matemático", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1O5TzRxpNh6Ag4f7i24n68dGEEYEUdXtr/view?usp=drive_link" },//RM
        { id: "bk055", title: "Tomo I - Física", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1zuBBCdXYVVD944dafcOw0-KgNJYqYtbV/view?usp=drive_link" },//Física
        { id: "bk056", title: "Tomo I - Química", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/13iB7kVGwalIwOxSUVRat5l28886S8GdB/view?usp=drive_link" },//Química
        { id: "bk057", title: "Tomo I - Biología", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Biología
        { id: "bk058", title: "Tomo I - Lenguaje", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Lenguaje
        { id: "bk059", title: "Tomo I - Literatura", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Literatura
        { id: "bk060", title: "Tomo I - Razonamiento verbal", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//RV
        { id: "bk061", title: "Tomo I - Historia del Perú", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Hp
        { id: "bk062", title: "Tomo I - Geografía", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Geografía
        { id: "bk063", title: "Tomo I - Historia Universal", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//hu
        { id: "bk064", title: "Tomo I - Economía", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//economia
        { id: "bk065", title: "Tomo I - Psicología", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//psicologia
        { id: "bk066", title: "Tomo I - Fortaleciendo Mi Fé", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//fmife
        //========== 5TO SECUNDARIA
        { id: "bk067", title: "Tomo I - Aritmética", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1ox1pvNyDnQPTRX3PUs6IPnig-pRZ3ShC/view?usp=drive_link" },//Aritmética
        { id: "bk068", title: "Tomo I - Álgebra", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1JWH2-c4EBGRMgEerzZwusH7zMBnmvdfi/view?usp=drive_link" },//Álgebra
        { id: "bk069", title: "Tomo I - Geometría", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1ZjQ8m8YCD11RpMy5VOVLRnjZn7vemhPE/view?usp=drive_link" },//Geometría
        { id: "bk070", title: "Tomo I - Trigonometría", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1CorUCpMK4nk3G0do8jZD02irD7CA8kth/view?usp=drive_link" },//Trigonometría
        { id: "bk071", title: "Tomo I - Razonamiento Matemático", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/17a9pWG9LZukKT3QoDKEWkbqgDRp8PtwL/view?usp=drive_link" },//RM
        { id: "bk072", title: "Tomo I - Física", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1n884VgZRo7WvViSeaTKcpk_3_nli7XgJ/view?usp=drive_link" },//Física
        { id: "bk073", title: "Tomo I - Química", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1qrFoTcGIFUXF1-fonn98Z85jOFo43pwn/view?usp=drive_link" },//Química
        { id: "bk074", title: "Tomo I - Biología", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Biología
        { id: "bk075", title: "Tomo I - Lenguaje", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Lenguaje
        { id: "bk076", title: "Tomo I - Literatura", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Literatura
        { id: "bk077", title: "Tomo I - Razonamiento verbal 1", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//RV
        { id: "bk078", title: "Tomo I - Razonamiento verbal 2", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//RV2
        { id: "bk079", title: "Tomo I - Historia del Perú", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Hp
        { id: "bk080", title: "Tomo I - Geografía", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Geografía
        { id: "bk081", title: "Tomo I - Historia Universal", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//hu
        { id: "bk082", title: "Tomo I - Economía", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//economia
        { id: "bk083", title: "Tomo I - Psicología", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//psicologia
        { id: "bk084", title: "Tomo I - Fortaleciendo Mi Fé", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//fmife


        // ========== AULAS REGULARES TOMO II ==========
        // ========== 1ERO SECUNDARIA
        { id: "bk085", title: "Tomo II - Aritmética", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1L-U6yc1zLjWA4f6hupL2M45SmQhNsk5C/view?usp=drive_link" },//Aritmética
        { id: "bk086", title: "Tomo II - Álgebra", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1OY1LKYUaNVfGnSvo8SLq6LB8hcrcoUvl/view?usp=drive_link" },//Álgebra
        { id: "bk087", title: "Tomo II - Geometría", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1WCzYPvjEBhoDPZbxDu3NfWBSRHw-Sjt7/view?usp=drive_link" },//Geometría
        { id: "bk088", title: "Tomo II - Trigonometría", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1Dtk2yzGbj_5cl2ISm0hl7hyuU8CkY9g2/view?usp=drive_link" },//Trigonometría
        { id: "bk089", title: "Tomo II - Razonamiento Matemático", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1RwgtElvlo4vzyWGMtWOvuWy5Q5QEa9_W/view?usp=drive_link" },//RM
        { id: "bk090", title: "Tomo II - Física", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/17JKiyAW8O77Cn4M_4w4k7Hv4yOpvW8wP/view?usp=drive_link" },//Física
        { id: "bk091", title: "Tomo II - Química", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1hhPEXS0sJcoEnNpvnOInBjt6x0syLCmJ/view?usp=drive_link" },//Química
        { id: "bk092", title: "Tomo II - Biología", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Biología
        { id: "bk093", title: "Tomo II - Lenguaje", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Lenguaje
        { id: "bk094", title: "Tomo II - Literatura", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Literatura
        { id: "bk095", title: "Tomo II - Razonamiento verbal", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//RV
        { id: "bk096", title: "Tomo II - Teatro", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//teatro
        { id: "bk097", title: "Tomo II - Historia del Perú", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//hp
        { id: "bk098", title: "Tomo II - Geografía", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Geografía
        { id: "bk099", title: "Tomo II - Valores", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//valores
        { id: "bk100", title: "Tomo II - Fortaleciendo Mi Fé", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//fmife
        // ========== AULAS REGULARES 2do==========
        { id: "bk101", title: "Tomo II - Aritmética", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1vGMqVrbBREbRnfAlM1ovG149AMH4wadn/view?usp=drive_link" },//Aritmética
        { id: "bk102", title: "Tomo II - Álgebra", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1w7mMPYJmZPWqC6e1ZL3A_Dw1PzTWkAjI/view?usp=drive_link" },//Álgebra
        { id: "bk103", title: "Tomo II - Geometría", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1iXsHlGDcpZ9bwaaUq_7l2U_vbFp2IkGJ/view?usp=drive_link" },//Geometría
        { id: "bk104", title: "Tomo II - Trigonometría", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1xA9wXF4eSNbuWqF8ntPdMjVpMlm4vyis/view?usp=drive_link" },//Trigonometría
        { id: "bk105", title: "Tomo II - Razonamiento Matemático", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1t2CxuAMKQuJk4k9OPw19yFc5pTAe7wW_/view?usp=drive_link" },//RM
        { id: "bk106", title: "Tomo II - Física", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1oonzHMaEAqkoXnjWtGBrLe1S9NaObgSJ/view?usp=drive_link" },//Física
        { id: "bk107", title: "Tomo II - Química", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/19tRJGwBxQo-aJ79MqgUiwf6L74x0jXeJ/view?usp=drive_link" },//Química
        { id: "bk108", title: "Tomo II - Biología", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Biología
        { id: "bk109", title: "Tomo II - Lenguaje", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Lenguaje
        { id: "bk110", title: "Tomo II - Literatura", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Literatura
        { id: "bk111", title: "Tomo II - Razonamiento verbal", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//RV
        { id: "bk112", title: "Tomo II - Teatro", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Teatro
        { id: "bk113", title: "Tomo II - Geografía", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Geografía
        { id: "bk114", title: "Tomo II - Valores", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//valoers
        { id: "bk115", title: "Tomo II - Fortaleciendo Mi Fé", author: "DIRAGE", category: "Aulas Regulares - 2do", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//fmife
        // ========== AULAS REGULARES 3ero==========
        { id: "bk116", title: "Tomo II - Aritmética", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1tGgr68w00TtzGBM8t74u2hXLQTbCnlvI/view?usp=drive_link" },//Aritmética
        { id: "bk117", title: "Tomo II - Álgebra", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1FcFPQhALMD4J1fgPP0_2sqqxpRpBmn9W/view?usp=drive_link" },//Álgebra
        { id: "bk118", title: "Tomo II - Geometría", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1j1YxkRj6ORjrIdeH5zJjGCVeteiun5_q/view?usp=drive_link" },//Geometría
        { id: "bk119", title: "Tomo II - Trigonometría", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1KRsvnMVDIZk_kthZlCH27K_7hX315BUl/view?usp=drive_link" },//Trigonometría
        { id: "bk120", title: "Tomo II - Razonamiento Matemático", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_ii", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1zZK_Os10kLShugCDrFT-sAScUqZ-k2px/view?usp=drive_link" },//RM
        { id: "bk121", title: "Tomo II - Física", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1Eh3kmIJjH-xu_Ppzr3CyKB5XVy8jWpx2/view?usp=drive_link" },//Física
        { id: "bk122", title: "Tomo II - Química", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1Pdp7lfzcuDf69eE_kJhIrx0azU5hicGx/view?usp=drive_link" },//Química
        { id: "bk123", title: "Tomo II - Biología", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Biología
        { id: "bk124", title: "Tomo II - Lenguaje", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Lenguaje
        { id: "bk125", title: "Tomo II - Literatura", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Literatura
        { id: "bk126", title: "Tomo II - Razonamiento verbal", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//RV
        { id: "bk127", title: "Tomo II - Historia del Perú", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Hp
        { id: "bk128", title: "Tomo II - Geografía", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//geografia
        { id: "bk129", title: "Tomo II - Historia Universal", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//hu
        { id: "bk130", title: "Tomo II - Economía", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//economia
        { id: "bk131", title: "Tomo II - Psicología", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//psicologia
        { id: "bk132", title: "Tomo II - Fortaleciendo Mi Fé", author: "DIRAGE", category: "Aulas Regulares - 3ero", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//fmife
        // ========== AULAS REGULARES 4to==========
        { id: "bk133", title: "Tomo II - Aritmética", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1ffWpZ8ZBErRiIr_LC05kDVn75lvxk5EC/view?usp=drive_link" },//Aritmética
        { id: "bk134", title: "Tomo II - Álgebra", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1lF7h5faA3LUwcRitDbbh-n596WeBXGn5/view?usp=drive_link" },//Álgebra
        { id: "bk135", title: "Tomo II - Geometría", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1JxUTVqVh5099niIUrf7IO8ESUXsnh7p1/view?usp=drive_link" },//Geometría
        { id: "bk136", title: "Tomo II - Trigonometría", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1R0JkdPPQ8dO8fQ-Rr0hTiaKIG6Poe4AJ/view?usp=drive_link" },//Trigonometría
        { id: "bk137", title: "Tomo II - Razonamiento Matemático", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1XKBqKBuuXi9jxwzA35taohQB20lbPOlS/view?usp=drive_link" },//RM
        { id: "bk138", title: "Tomo II - Física", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1e-U1iRXIYPNDcgiK2ZwyoCeAE6rIQ-va/view?usp=drive_link" },//Física
        { id: "bk139", title: "Tomo II - Química", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1HOCstPrLKLhwnFOLA5SQO8b_BJgi8-O8/view?usp=drive_link" },//Química
        { id: "bk140", title: "Tomo II - Biología", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Biología
        { id: "bk141", title: "Tomo II - Lenguaje", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Lenguaje
        { id: "bk142", title: "Tomo II - Literatura", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Literatura
        { id: "bk143", title: "Tomo II - Razonamiento verbal", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//RV
        { id: "bk144", title: "Tomo II - Historia del Perú", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Hp
        { id: "bk145", title: "Tomo II - Geografía", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//geografia
        { id: "bk146", title: "Tomo II - Historia Universal", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//hp
        { id: "bk147", title: "Tomo II - Economía", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//economia
        { id: "bk148", title: "Tomo II - Psicología", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//psicologia
        { id: "bk149", title: "Tomo II - Fortaleciendo Mi Fé", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//fmife
        // ========== AULAS REGULARES 5to==========
        { id: "bk150", title: "Tomo II - Aritmética", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1bjH_12LGEIy1G1XH-de5N_EVvkU70yzT/view?usp=drive_link" },//Aritmética
        { id: "bk151", title: "Tomo II - Álgebra", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1kYOzwNndB4BE335H-G57wigvr3LPlyR3/view?usp=drive_link" },//Álgebra
        { id: "bk152", title: "Tomo II - Geometría", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/17JkKln2WpKGtCmwOs23IF7_WFsjyWlkR/view?usp=drive_link" },//Geometría
        { id: "bk153", title: "Tomo II - Trigonometría", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1VfSivTXRZfPm62rs-VPFhxKjm8YdfW0v/view?usp=drive_link" },//Trigonometría
        { id: "bk154", title: "Tomo II - Razonamiento Matemático", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1z2NKDfb7AqZEwOWinyD2cgyHoICt59wT/view?usp=drive_link" },//RM
        { id: "bk155", title: "Tomo II - Física", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1nFbpUg1VINggrpfL0cxOVm2X55IbnFfH/view?usp=drive_link" },//Física
        { id: "bk156", title: "Tomo II - Química", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1BVBNL3Q7ibWKnysqWjmauezSGP6bxqJ-/view?usp=drive_link" },//Química
        { id: "bk157", title: "Tomo II - Biología", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Biología
        { id: "bk158", title: "Tomo II - Lenguaje", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Lenguaje
        { id: "bk159", title: "Tomo II - Literatura", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Literatura
        { id: "bk160", title: "Tomo II - Razonamiento verbal 1", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//RV1
        { id: "bk161", title: "Tomo II - Razonamiento verbal 2", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//RV2
        { id: "bk162", title: "Tomo II - Historia del Perú", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//Hp
        { id: "bk163", title: "Tomo II - Geografía", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//geografia
        { id: "bk164", title: "Tomo II - Historia Universal", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//hp
        { id: "bk165", title: "Tomo II - Economía", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//economia
        { id: "bk166", title: "Tomo II - Psicología", author: "DIRAGE", category: "Aulas Regulares - 4to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//psicologia    
        { id: "bk167", title: "Tomo II - Fortaleciendo Mi Fé", author: "DIRAGE", category: "Aulas Regulares - 5to", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },//fmife



        // ========== 5TO PRE ==========
        { id: "bk039", title: "Tomo I - Aritmética", author: "DIRAGE", category: "5to Pre", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1cdx5b0d8CwdYOsTAvzAnpThXEROmRjM2/view?usp=drive_link" },
        { id: "bk040", title: "Tomo I - Álgebra", author: "DIRAGE", category: "5to Pre", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1XBOH-FuuGU9-kgVUsiXC6uVH4dSPHr7v/view?usp=drive_link" },
        { id: "bk041", title: "Tomo I - Geometría", author: "DIRAGE", category: "5to Pre", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1VPuoymWlEuB6UtLfLF7PBOPH-ecE3qz-/view?usp=drive_link" },
        { id: "bk042", title: "Tomo I - Trigonometría", author: "DIRAGE", category: "5to Pre", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1Noh8cqxB5CT61QkVC5kOD50elB9XKKdk/view?usp=drive_link" },
        { id: "bk043", title: "Tomo I - Razonamiento Matemático", author: "DIRAGE", category: "5to Pre", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1ozUG5ji3LTKAdJ6smlHXkIoSEBSB3E1H/view?usp=drive_link" },
        { id: "bk044", title: "Tomo I - Física", author: "DIRAGE", category: "5to Pre", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1u6_3sTWZZ7olZ5pBUj-7SRGgR9GnwE8r/view?usp=drive_link" },
        { id: "bk045", title: "Tomo I - Química", author: "DIRAGE", category: "5to Pre", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/16ES7oZ931nKJVQB21p287uFmgkOv2s3X/view?usp=drive_link" },
        { id: "bk046", title: "Tomo I - Biología", author: "DIRAGE", category: "5to Pre", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1HkHNufKXd9h0RFTZm0waXvj0IipReZBK/view?usp=drive_link" },
        { id: "bk047", title: "Tomo I - Lenguaje", author: "DIRAGE", category: "5to Pre", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1U48XiRLJu1kF8d76AE3vW89sHC4y4CCC/view?usp=drive_link" },
        { id: "bk048", title: "Tomo I - Literatura", author: "DIRAGE", category: "5to Pre", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1yF55XwfdIoUeoV3CsIr4k7K8ohpXClvs/view?usp=drive_link" },
        { id: "bk049", title: "Tomo I - Razonamiento verbal", author: "DIRAGE", category: "5to Pre", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1DWFCiBwF_jHLVgSNdr8YpYQymRH7Lqf8/view?usp=drive_linkk" },
        { id: "bk051", title: "Tomo I - Historia del Perú", author: "DIRAGE", category: "5to Pre", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1zI3_KsI86U1v3i5mNYVoyw8-kvPTKEna/view?usp=drive_link" },
        { id: "bk052", title: "Tomo I - Geografía", author: "DIRAGE", category: "5to Pre", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1cGok55fA1HBUB4m-CMGuRdkQ_t-9BQbj/view?usp=drive_link" },
        { id: "bk053", title: "Tomo I - Historia Universal", author: "DIRAGE", category: "5to Pre", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1fTVzlXQN54r1HED7qKCe-84D6mv8U7N_/view?usp=drive_link" },
        { id: "bk054", title: "Tomo I - Economía", author: "DIRAGE", category: "5to Pre", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1DaOkF4O_8t14eKkyq6T0WaNtW-E4T-Mh/view?usp=drive_link" },
        { id: "bk055", title: "Tomo I - Psicología", author: "DIRAGE", category: "5to Pre", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1KVeQ6D03sDxVB_zB-5lAgh9KvKhsiSlr/view?usp=drive_link" },

        { id: "bk058", title: "Tomo II - Aritmética", author: "DIRAGE", category: "5to Pre", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1tyPWohxmE_AEjMa3S04ESQpHZp3MEbNK/view?usp=drive_link" },
        { id: "bk059", title: "Tomo II - Álgebra", author: "DIRAGE", category: "5to Pre", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1kYOzwNndB4BE335H-G57wigvr3LPlyR3/view?usp=drive_link" },
        { id: "bk060", title: "Tomo II - Geometría", author: "DIRAGE", category: "5to Pre", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1_63PuCc-fr08RPLobANsqqSIDq7NHE67/view?usp=drive_link" },
        { id: "bk061", title: "Tomo II - Trigonometría", author: "DIRAGE", category: "5to Pre", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1MynzrdbdPV3anyM9EQPbHx1i6YztDz7K/view?usp=drive_link" },
        { id: "bk062", title: "Tomo II - Razonamiento Matemático", author: "DIRAGE", category: "5to Pre", tomo: "tomo_ii", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1YCEtw9okGDGR8SNKJSfPXUdOhd5G1NhI/view?usp=drive_link" },
        { id: "bk063", title: "Tomo II - Física", author: "DIRAGE", category: "5to Pre", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1jLzY933z8tHS6L6yIGZelYiu8q70GeVu/view?usp=drive_link" },
        { id: "bk064", title: "Tomo II - Química", author: "DIRAGE", category: "5to Pre", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1oQaUZOFrSQFuFWLkh6nFwpMqnHNfF3pW/view?usp=drive_link" },
        { id: "bk065", title: "Tomo II - Biología", author: "DIRAGE", category: "5to Pre", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1nsVhz4A4u-Nkvpf3SE1F2wxsnPlFQWQT/view?usp=drive_link" },
        { id: "bk066", title: "Tomo II - Lenguaje", author: "DIRAGE", category: "5to Pre", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1vbztZDttPOC_EggmRI4baThr_tHiqRzv/view?usp=drive_link" },
        { id: "bk067", title: "Tomo II - Literatura", author: "DIRAGE", category: "5to Pre", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1mddLbEyOwZHxaJ7qdlze1fE4qmilW4_i/view?usp=drive_link" },
        { id: "bk068", title: "Tomo II - Razonamiento verbal", author: "DIRAGE", category: "5to Pre", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/11MPe6yRDwLOf1L_fIaqroSASNbSAxaDB/view?usp=drive_link" },
        { id: "bk070", title: "Tomo II - Historia del Perú", author: "DIRAGE", category: "5to Pre", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1d5scKaZSVxF7uHOrYE0CtAKUZs-i0FF3/view?usp=drive_link" },
        { id: "bk071", title: "Tomo II - Geografía", author: "DIRAGE", category: "5to Pre", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1_YSEdNXR93ikjkP2u5jq884mWMI5o8qO/view?usp=drive_link" },
        { id: "bk072", title: "Tomo II - Historia Universal", author: "DIRAGE", category: "5to Pre", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1uaitvSLzuLglryaBYLQpuYZbqcCh9A0J/view?usp=drive_link" },
        { id: "bk073", title: "Tomo II - Economía", author: "DIRAGE", category: "5to Pre", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1m1w-VhBtg1JSWEEqGyV0opvkSoWdKb4e/view?usp=drive_link" },
        { id: "bk074", title: "Tomo II - Psicología", author: "DIRAGE", category: "5to Pre", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1943PvA5IsuaMouMo6jjzrnGvPs4gyleo/view?usp=drive_link" },


        // ========== 5TO SAN MARCOS ==========
        { id: "bk077", title: "Tomo I - Aritmética", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1T1suczasbOWMcOhasikL3cClvzkHOL_S/view?usp=drive_link" },
        { id: "bk078", title: "Tomo I - Álgebra", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1NkHF8seCAB4GYCnUq6jzoNwQkkvyHHRX/view?usp=drive_link" },
        { id: "bk079", title: "Tomo I - Geometría", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1IKX6hpfCey1fnQtCK0hqCdpW5pQN9SGP/view?usp=drive_link" },
        { id: "bk080", title: "Tomo I - Trigonometría", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1mmujcZoag3yYRfJ1q__ad7gmdqE9afc-/view?usp=drive_link" },
        { id: "bk081", title: "Tomo I - Razonamiento Matemático", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1YF8BP5XT6hEupP8U79UcmK-MK64GUGHj/view?usp=drive_link" },
        { id: "bk082", title: "Tomo I - Física", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/15wBoqx0oQpAE1Rpm0iv4AbEe45PSQxQP/view?usp=drive_link" },
        { id: "bk083", title: "Tomo I - Química", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1AlEdFvNTJ9axXNX4iNPVT-WDJQ_f5MRj/view?usp=drive_link" },
        { id: "bk084", title: "Tomo I - Biología", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1kqoZG3sJeP6fa9d0wqzuyW4e6_88CWrq/view?usp=drive_link" },
        { id: "bk085", title: "Tomo I - Lenguaje", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1p4-J2oRlNHcVTEMvP8u1F8x0pTRwqoxY/view?usp=drive_link" },
        { id: "bk086", title: "Tomo I - Literatura", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/13LZozU2xFebiqKSeXPUm1bypoXOVu44U/view?usp=drive_link" },
        { id: "bk087", title: "Tomo I - Razonamiento verbal", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1YpNd5wN67qKE2C1AEnE2NiuStWzSUW8-/view?usp=drive_link" },
        { id: "bk089", title: "Tomo I - Historia del Perú", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/11NR1s6q_IQOAKaCiBgkYuTDvgDAPILeg/view?usp=drive_link" },
        { id: "bk090", title: "Tomo I - Geografía", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1DMddh_GVcLoIA3nsmhRBv6siO0hAbt28/view?usp=drive_link" },
        { id: "bk091", title: "Tomo I - Historia Universal", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1gIv4bMDx4GXdqbYBoSfv7LhJSb9e8haj/view?usp=drive_link" },
        { id: "bk092", title: "Tomo I - Economía", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1z5rgrEGumZ1wMqBjRszByelN8fQftgcq/view?usp=drive_link" },
        { id: "bk093", title: "Tomo I - Psicología", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1UYqrwoS5dokd-MjEXeyv66YADkh81gOB/view?usp=drive_link" },

        { id: "bk096", title: "Tomo II - Aritmética", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1KmiumukqvOTNVbNYffvhH6DjH7nEvxZk/view?usp=drive_link" },
        { id: "bk097", title: "Tomo II - Álgebra", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1HUUNnOl8vfnuzMyxOitr02JuwgIyn1VL/view?usp=drive_link" },
        { id: "bk098", title: "Tomo II - Geometría", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1FbqmWwGNJ7NTltSa8MFw2mUjTy5Qb0jL/view?usp=drive_link" },
        { id: "bk099", title: "Tomo II - Trigonometría", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1QlkEzUuTFrucj0l_jeLwEaeXtLReRM9c/view?usp=drive_link" },
        { id: "bk100", title: "Tomo II - Razonamiento Matemático", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_ii", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1bLlyh4SdKJEcM4Z36m03uamrrtRR5VcD/view?usp=drive_link" },
        { id: "bk101", title: "Tomo II - Física", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1L5YS9xnhOYQKoVd49BhJJGckEygTPU-o/view?usp=drive_link" },
        { id: "bk102", title: "Tomo II - Química", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1XUv9akn2gMYeQj9sx5G_xdCb0kp4iSQq/view?usp=drive_link" },
        { id: "bk103", title: "Tomo II - Biología", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1gHGPIPakl_Yc70m10eAnbT09HDebhLhJ/view?usp=drive_link" },
        { id: "bk104", title: "Tomo II - Lenguaje", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1xTAW6DgdLZagKCBNoqSmFanmRh3JvwSv/view?usp=drive_link" },
        { id: "bk105", title: "Tomo II - Literatura", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1jcW4LUXndtxTCugfQ3OdMr6sB42Uzybx/view?usp=drive_link" },
        { id: "bk106", title: "Tomo II - Razonamiento verbal", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1tAnNgYfFjG26u5b_HorU-MMEUoVH9bwL/view?usp=drive_link" },
        { id: "bk108", title: "Tomo II - Historia del Perú", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1f82DbcF-7i28fkZvhwTou4xLfsWoosAF/view?usp=drive_link" },
        { id: "bk109", title: "Tomo II - Geografía", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1QuNrfliRBKoRHRhc5Xk4XRFL8iWuFSQQ/view?usp=drive_link" },
        { id: "bk110", title: "Tomo II - Historia Universal", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/10CoMwoD6bUuY8F51kPkHky3K74pDDP3i/view?usp=drive_link" },
        { id: "bk111", title: "Tomo II - Economía", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/13x-f3G3UQgfIAR85Rd5vLQ6kN22-mifO/view?usp=drive_link" },
        { id: "bk112", title: "Tomo II - Psicología", author: "DIRAGE", category: "5to San Marcos", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/12LuBpVqoua7V6J4Gnk-tt4GtP4-xjg7D/view?usp=drive_link" },

        // ========== 5TO UNI ==========
        { id: "bk115", title: "Tomo I - Aritmética", author: "DIRAGE", category: "Aulas Regulares", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1wDqxN7b51ZfwTjgecTN22pYa4_Nj0G6-/view?usp=drive_link" },
        { id: "bk116", title: "Tomo I - Álgebra", author: "DIRAGE", category: "Aulas Regulares", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1VAemzW-kQK6iel7F3i9Y4B2dYd8JO9vv/view?usp=drive_link" },
        { id: "bk117", title: "Tomo I - Geometría", author: "DIRAGE", category: "Aulas Regulares", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1arU7fX6_xSpyUA5jzTAinhzxv4We5_E6/view?usp=drive_link" },
        { id: "bk118", title: "Tomo I - Trigonometría", author: "DIRAGE", category: "Aulas Regulares", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1DvG5UloO2iIy-5RU6qwxzW2Re84d3RoT/view?usp=drive_link" },
        { id: "bk120", title: "Tomo I - Física", author: "DIRAGE", category: "Aulas Regulares", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1m0pb2aVZu7MRntLgSRS17_vaPGZOcMGA/view?usp=drive_link" },
        { id: "bk121", title: "Tomo I - Química", author: "DIRAGE", category: "Aulas Regulares", tomo: "tomo_i", tomoName: "TOMO I", driveUrl: "https://drive.google.com/file/d/1Iv6llbrVeH9vRIdy75Vwk4b3H5cIXStK/view?usp=drive_link" },
       
        { id: "bk134", title: "Tomo II - Aritmética", author: "DIRAGE", category: "Aulas Regulares", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1nVmRob5uGZmb3SQv3c4NY-Zyrsa-IbuR/view?usp=drive_link" },
        { id: "bk135", title: "Tomo II - Álgebra", author: "DIRAGE", category: "Aulas Regulares", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1etf2u8ABLZPR-sWHYDTfgwoAp9OkGzEk/view?usp=drive_link" },
        { id: "bk136", title: "Tomo II - Geometría", author: "DIRAGE", category: "Aulas Regulares", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1Rw3rC1QkzEQ7YvPFf3lMgwCr0ycn7BUq/view?usp=drive_link" },
        { id: "bk137", title: "Tomo II - Trigonometría", author: "DIRAGE", category: "Aulas Regulares", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1TqJ8WeYRaKR2lC7PrhlrptaX4DuNjDl0/view?usp=drive_link" },
        { id: "bk139", title: "Tomo II - Física", author: "DIRAGE", category: "Aulas Regulares", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1XLXX5Ni3Mgi35sWsJzX5w__Y_chsOFJ7/view?usp=drive_link" },
        { id: "bk140", title: "Tomo II - Química", author: "DIRAGE", category: "Aulas Regulares", tomo: "tomo_ii", tomoName: "TOMO II", driveUrl: "https://drive.google.com/file/d/1SoHIAxZwskX8qG7A7hILQ4V6U9yjHstf/view?usp=drive_link" }
                       
        // ========== TOMO VI (Documentos adicionales) ==========
        // Aquí puedes agregar más documentos para el TOMO VI
        // { id: "bk026", title: "NUEVO DOCUMENTO TOMO VI", author: "DIRAGE", category: "Comunicados", tomo: "tomo_vi", tomoName: "TOMO VI", driveUrl: "URL" },
        
        // ========== TOMO VII (Documentos adicionales) ==========
        // Aquí puedes agregar más documentos para el TOMO VII
        
        // ========== TOMO VIII (Documentos adicionales) ==========
        // Aquí puedes agregar más documentos para el TOMO VIII
    ];

    function normalizeToPreview(url) {
        if (!url) return "";
        if (url.includes("/preview")) return url;
        const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
        if (match && match[1]) return `https://drive.google.com/file/d/${match[1]}/preview`;
        return url;
    }

    const booksCollection = rawBooks.map(book => ({
        ...book,
        embedUrl: normalizeToPreview(book.driveUrl),
        originalDriveUrl: book.driveUrl
    }));

    function getAllBooks() { return [...booksCollection]; }
    
    function getBooksByTomo(tomoId) {
        return booksCollection.filter(book => book.tomo === tomoId);
    }
    
    function getCategories() { 
        return [...new Set(booksCollection.map(b => b.category))].sort(); 
    }
    
    function getTomos() {
        const tomosMap = new Map();
        booksCollection.forEach(book => {
            if (!tomosMap.has(book.tomo)) {
                tomosMap.set(book.tomo, { id: book.tomo, name: book.tomoName });
            }
        });
        return Array.from(tomosMap.values());
    }

    return { getAllBooks, getBooksByTomo, getCategories, getTomos };
})();

/* -------------------- FRONTEND -------------------- */
const FrontendController = (function(api) {
    let books = [];
    let filteredBooks = [];
    let currentTomo = "tomo_i";
    let currentCategory = "all";
    let searchKeyword = "";
    let activeBook = null;

    let booksGridContainer, categoryContainer, searchInput;
    let currentBookTitleSpan, driveLinkBtn, pdfViewerArea;
    let viewerDock, closeDockBtn;
    let totalDocsSpan, totalCategoriesSpan, resultCountSpan, currentTomoDisplay;

    function cacheDom() {
        booksGridContainer = document.getElementById("booksGridFront");
        categoryContainer = document.getElementById("categoryContainer");
        searchInput = document.getElementById("searchInputGlobal");
        currentBookTitleSpan = document.getElementById("currentBookTitle");
        driveLinkBtn = document.getElementById("directDriveLink");
        pdfViewerArea = document.getElementById("pdfViewerArea");
        viewerDock = document.getElementById("viewerDock");
        closeDockBtn = document.getElementById("closeDockBtn");
        totalDocsSpan = document.getElementById("totalDocs");
        totalCategoriesSpan = document.getElementById("totalCategories");
        resultCountSpan = document.getElementById("resultCount");
        currentTomoDisplay = document.getElementById("currentTomoDisplay");
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }

    function updateStats() {
        if (totalDocsSpan) totalDocsSpan.textContent = books.length;
        if (totalCategoriesSpan) totalCategoriesSpan.textContent = api.getCategories().length;
    }

    function renderCategoryFilters() {
        const categories = api.getCategories();
        let html = `<button class="category-chip ${currentCategory === 'all' ? 'active' : ''}" data-cat="all">
                        <i class="fas fa-folder-open"></i>
                        <span>Todas</span>
                    </button>`;
        categories.forEach(cat => {
            html += `<button class="category-chip ${currentCategory === cat ? 'active' : ''}" data-cat="${escapeHtml(cat)}">
                        <i class="fas fa-folder"></i>
                        <span>${escapeHtml(cat)}</span>
                    </button>`;
        });
        categoryContainer.innerHTML = html;

        document.querySelectorAll('.category-chip').forEach(btn => {
            btn.addEventListener('click', () => {
                const catValue = btn.getAttribute('data-cat');
                if (catValue) {
                    currentCategory = catValue;
                    applyFiltersAndRender();
                    renderCategoryFilters();
                }
            });
        });
    }

    function computeFilteredBooks() {
        // Primero filtrar por TOMO
        let tomoBooks = api.getBooksByTomo(currentTomo);
        
        // Luego filtrar por categoría y búsqueda
        let result = tomoBooks.filter(book => {
            const matchCat = (currentCategory === "all") || (book.category === currentCategory);
            const term = searchKeyword.trim().toLowerCase();
            const matchByTitle = book.title.toLowerCase().includes(term);
            const matchByAuthor = book.author ? book.author.toLowerCase().includes(term) : false;
            const matchSearch = term === "" || matchByTitle || matchByAuthor;
            return matchCat && matchSearch;
        });
        filteredBooks = result;
        if (resultCountSpan) resultCountSpan.textContent = `${result.length} documentos`;
        return result;
    }

    function renderBooksGrid() {
        if (!booksGridContainer) return;
        const booksToRender = filteredBooks.length ? filteredBooks : computeFilteredBooks();

        if (booksToRender.length === 0) {
            booksGridContainer.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding: 60px; color: #94a3b8;">
                <i class="fas fa-search" style="font-size: 48px; margin-bottom: 16px; opacity: 0.5;"></i>
                <p>No se encontraron documentos en <strong>${currentTomoDisplay ? currentTomoDisplay.innerText : currentTomo}</strong> para "<strong>${escapeHtml(searchKeyword)}</strong>"</p>
            </div>`;
            return;
        }

        let gridHtml = "";
        booksToRender.forEach(book => {
            let shortId = book.id.toUpperCase();
            let displayTitle = book.title.length > 55 ? book.title.substring(0, 52) + "..." : book.title;
            gridHtml += `
                <div class="doc-card" data-book-id="${book.id}">
                    <div class="doc-card-icon">
                        <i class="fas fa-file-pdf"></i>
                    </div>
                    <div class="doc-card-title" title="${escapeHtml(book.title)}">${escapeHtml(displayTitle)}</div>
                    <div class="doc-card-meta">
                        <span class="doc-card-category">${escapeHtml(book.category)}</span>
                        <span class="doc-card-tomo">${escapeHtml(book.tomoName)}</span>
                    </div>
                </div>
            `;
        });
        booksGridContainer.innerHTML = gridHtml;

        document.querySelectorAll('.doc-card').forEach(card => {
            const id = card.getAttribute('data-book-id');
            card.addEventListener('click', () => {
                const selected = books.find(b => b.id === id);
                if (selected) setActiveBook(selected);
            });
        });
    }

    function setActiveBook(book) {
        activeBook = book;
        currentBookTitleSpan.innerHTML = `${escapeHtml(book.title)} — ${escapeHtml(book.author || 'DIRAGE')}`;
        driveLinkBtn.href = book.originalDriveUrl || book.driveUrl;
        
        let embedSrc = book.embedUrl;
        if (!embedSrc || embedSrc === "") embedSrc = "https://drive.google.com/file/d/dummy/preview";
        const finalSrc = embedSrc + (embedSrc.includes('?') ? '&embedded=true' : '?embedded=true');
        pdfViewerArea.innerHTML = `<iframe src="${finalSrc}" title="Visor: ${escapeHtml(book.title)}" frameborder="0" allowfullscreen></iframe>`;
        
        viewerDock.classList.add('open');
    }

    function closeViewer() {
        viewerDock.classList.remove('open');
        setTimeout(() => {
            if (!viewerDock.classList.contains('open')) {
                pdfViewerArea.innerHTML = `<div class="empty-viewer">
                    <i class="fas fa-file-pdf"></i>
                    <p>Seleccione un documento de la lista<br>para visualizarlo aquí</p>
                    <small>Vista previa integrada desde Google Drive</small>
                </div>`;
                currentBookTitleSpan.innerHTML = "Ningún documento seleccionado";
                driveLinkBtn.href = "#";
            }
        }, 300);
        activeBook = null;
    }

    function resetViewerIfNeeded() {
        if (activeBook && !filteredBooks.some(b => b.id === activeBook.id)) {
            closeViewer();
        }
    }

    function applyFiltersAndRender() {
        computeFilteredBooks();
        renderBooksGrid();
        resetViewerIfNeeded();
    }

    function changeTomo(tomoId, tomoName) {
        currentTomo = tomoId;
        currentCategory = "all";
        searchKeyword = "";
        if (searchInput) searchInput.value = "";
        if (currentTomoDisplay) currentTomoDisplay.innerText = tomoName;
        
        applyFiltersAndRender();
        renderCategoryFilters();
        
        // Actualizar active state en los botones de tomo
        document.querySelectorAll('.tomo-btn').forEach(btn => {
            if (btn.getAttribute('data-tomo') === tomoId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    function bindTomoButtons() {
        document.querySelectorAll('.tomo-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tomoId = btn.getAttribute('data-tomo');
                const tomoName = btn.querySelector('.tomo-number')?.innerText || tomoId;
                changeTomo(tomoId, tomoName);
            });
        });
    }

    let debTimer;
    function bindEvents() {
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                clearTimeout(debTimer);
                debTimer = setTimeout(() => {
                    searchKeyword = e.target.value;
                    applyFiltersAndRender();
                }, 300);
            });
        }
        if (closeDockBtn) {
            closeDockBtn.addEventListener('click', closeViewer);
        }
    }

    function init() {
        cacheDom();
        books = api.getAllBooks();
        if (!books.length) return;

        updateStats();
        bindTomoButtons();
        renderCategoryFilters();
        
        // Inicializar con TOMO I
        currentTomo = "tomo_i";
        currentCategory = "all";
        searchKeyword = "";
        if (currentTomoDisplay) currentTomoDisplay.innerText = "TOMO I";
        computeFilteredBooks();
        renderBooksGrid();
        bindEvents();
    }

    return { init };
})(LIBRARY_API);

document.addEventListener('DOMContentLoaded', () => {
    FrontendController.init();
});