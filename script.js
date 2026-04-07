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
        2: "https://drive.google.com/file/d/1Gben4FjA_uavS9zulDLrAClXNOrvUP9y/view?usp=drive_link", // Geografía
        3: "https://drive.google.com/file/d/1PqtJ0Cr396wZRZNvk05EOAo0XIVGDTw4/view?usp=drive_link", // Historia del Perú
        6: "https://docs.google.com/presentation/d/1a2xd4ELl4J-2l0Ie-iEUHUUyWp8wTD4w/edit?usp=drive_link", // Valores
        7: "https://drive.google.com/file/d/1hH8662UuRdXDOfTicobcxLhmQuS9qNvU/view?usp=drive_link", // Fortaleciendo mi Fe
        8: "https://drive.google.com/file/d/1slRgf8l6UrGCn2g8BDvUvVf2lXJ_Qs2I/view?usp=drive_link", // Lenguaje
        9: "https://drive.google.com/file/d/1hHXwEvwpqbZuYfQ_PbYuN8OOxpVyTAZU/view?usp=drive_link", // Literatura
        10: "https://drive.google.com/file/d/1l45Va0JHgBe4Z6ZdXyLLA5rd14ZTk3cL/view?usp=drive_link", // Razonamiento Verbal
        11: "https://drive.google.com/file/d/1pNTdjSStgXRkF2OGW0nYTDF5GtdEnOSL/view?usp=drive_link", // Teatro
        13: "https://drive.google.com/file/d/1w2WjQnY6YhKJa71Ks3gIVDW3_aAKNX6A/view?usp=drive_link", // Biología
        14: "https://drive.google.com/file/d/1kUGOaP33hjr3EvjO6fMDGUrlk6E2zjkt/view?usp=drive_link", // Física
        15: "https://drive.google.com/file/d/1hhPEXS0sJcoEnNpvnOInBjt6x0syLCmJ/view?usp=drive_link", // Química
        16: "https://drive.google.com/file/d/1OY1LKYUaNVfGnSvo8SLq6LB8hcrcoUvl/view?usp=drive_link", // Álgebra
        17: "https://drive.google.com/file/d/1L-U6yc1zLjWA4f6hupL2M45SmQhNsk5C/view?usp=drive_link", // Aritmética 
        18: "https://drive.google.com/file/d/1WCzYPvjEBhoDPZbxDu3NfWBSRHw-Sjt7/view?usp=drive_link", // Geometría
        19: "https://drive.google.com/file/d/1RwgtElvlo4vzyWGMtWOvuWy5Q5QEa9_W/view?usp=drive_link", // Razonamiento Matemático
        20: "https://drive.google.com/file/d/1YvQX4amSl4x9ogrzgHQe7frBjcJycM0P/view?usp=drive_link", // Trigonometría
    },
    // ========== 2DO SECUNDARIA ==========
    "2do": {
        2: "https://drive.google.com/file/d/1lSYwQ2TDBquWvjg1p5i0YORzO-c8v8ND/view?usp=drive_link", // Geografía
        3: "https://drive.google.com/file/d/1uPJCTd7PZjXVsZZ9ipZAIYpY7lZWvYxJ/view?usp=drive_link", // Historia del Perú
        6: "https://docs.google.com/presentation/d/1a2xd4ELl4J-2l0Ie-iEUHUUyWp8wTD4w/edit?usp=drive_link", // Valores
        7: "https://drive.google.com/file/d/1OjzXHkqxiEeoV40ZYOjzjsXyMaXLz13J/view?usp=drive_link", // Fortaleciendo mi Fe
        8: "https://drive.google.com/file/d/1xBMnfsVvAJ6zDqhfDMea-AzsQ5ozsWOv/view?usp=drive_link", // Lenguaje
        9: "https://drive.google.com/file/d/1OOakOXaMB5g7V3yMOh8LmUJo4MfWbgqj/view?usp=drive_link", // Literatura
        10: "https://drive.google.com/file/d/1lc9IEaqlLBeKXVszqqVfi3p2ymsmdw8n/view?usp=drive_link", // Razonamiento Verbal
        11: "https://drive.google.com/file/d/1xfJfoXO6ygwcPIVCT2vw1SGrTGAUOvpl/view?usp=drive_link", // Teatro
        13: "https://drive.google.com/file/d/1H31CjICkPbVT8sisQtpAMVcHKHpSaC4G/view?usp=drive_link", // Biología
        14: "https://drive.google.com/file/d/1Hwj9fV9au90AXJstVY7BFy0aWqybGui4/view?usp=drive_link", // Física
        15: "https://drive.google.com/file/d/19tRJGwBxQo-aJ79MqgUiwf6L74x0jXeJ/view?usp=drive_link", // Química
        16: "https://drive.google.com/file/d/1w7mMPYJmZPWqC6e1ZL3A_Dw1PzTWkAjI/view?usp=drive_link", // Álgebra
        17: "https://drive.google.com/file/d/1vGMqVrbBREbRnfAlM1ovG149AMH4wadn/view?usp=drive_link", // Aritmética 
        18: "https://drive.google.com/file/d/1iXsHlGDcpZ9bwaaUq_7l2U_vbFp2IkGJ/view?usp=drive_link", // Geometría
        19: "https://drive.google.com/file/d/1t2CxuAMKQuJk4k9OPw19yFc5pTAe7wW_/view?usp=drive_link", // Razonamiento Matemático
        20: "https://drive.google.com/file/d/1rSh3yHqagF_1-gDUybcKcq7yQkhZv-_5/view?usp=drive_link", // Trigonometría
    },
    // ========== 3RO SECUNDARIA ==========
    "3ro": {
        1: "https://drive.google.com/file/d/14xxjGWJbx5X_yK527WuZb2xea_woNHU1/view?usp=drive_link", // Economía
        2: "https://drive.google.com/file/d/1-BK-9uJJXd-GnY1kPe0VgBQiHuGFy_R5/view?usp=drive_link", // Geografía
        3: "https://drive.google.com/file/d/1ADFY_9Oj-jHahIsm2cUd2b19AuDwgICu/view?usp=drive_link", // Historia del Perú
        4: "https://drive.google.com/file/d/1jj_cK_w13MyTozSgSuMMa0w2n_cdUSPZ/view?usp=drive_link", // Historia Universal
        5: "https://docs.google.com/presentation/d/1F8rrvKkEJN2H-C6evl5uHT2T7BtGApYo/edit?usp=drive_link", // Psicología
        7: "https://drive.google.com/file/d/122Kyd8wrE-hlhK_9YQP2y2pfVrnsjfAu/view?usp=drive_link", // Fortaleciendo mi Fe
        8: "https://drive.google.com/file/d/1CuA20OIJMkZHi_Bs8RVx6olCIchLJXfQ/view?usp=drive_link", // Lenguaje
        9: "https://drive.google.com/file/d/1akjyGPEE6r2dOWwNIclEn3-Cf8Qx4nfn/view?usp=drive_link", // Literatura
        10: "https://drive.google.com/file/d/1mvMxnzB89x-svf0mxLbBgoCA49VhN51F/view?usp=drive_link", // Razonamiento Verbal
        12: "https://docs.google.com/presentation/d/1_9WGrfPF0Ct4mtdb40q-kmouylsYICWl/edit?usp=drive_link", // Tutoría
        13: "https://drive.google.com/file/d/1opihxpY8tr4Wg2bTH_fMcFb7hMJThkwb/view?usp=drive_link", // Biología
        14: "https://drive.google.com/file/d/1cBLu1SSBynXhAC2sny1YOmgYVnpirRP1/view?usp=drive_link", // Física
        15: "https://drive.google.com/file/d/1Pdp7lfzcuDf69eE_kJhIrx0azU5hicGx/view?usp=drive_link", // Química
        16: "https://drive.google.com/file/d/1FcFPQhALMD4J1fgPP0_2sqqxpRpBmn9W/view?usp=drive_link", // Álgebra
        17: "https://drive.google.com/file/d/1tGgr68w00TtzGBM8t74u2hXLQTbCnlvI/view?usp=drive_link", // Aritmética
        18: "https://drive.google.com/file/d/1j1YxkRj6ORjrIdeH5zJjGCVeteiun5_q/view?usp=drive_link", // Geometría
        19: "https://drive.google.com/file/d/1zZK_Os10kLShugCDrFT-sAScUqZ-k2px/view?usp=drive_link", // Razonamiento Matemático
        20: "https://drive.google.com/file/d/1C1FBElhjSd2qrcRKSJsdFcEaGhh3WSmZ/view?usp=drive_link", // Trigonometría
        21: "https://drive.google.com/file/d/1bCByqdnPTvT9Z-ZZzDnxVLFh36cWd3XM/view?usp=drive_link" //cultura financiera
    },
    // ========== 4TO SECUNDARIA ==========
    "4to": {
        1: "https://drive.google.com/file/d/1JKTSvrY_NC5ZwbnBeFb46_dwroUQ83HH/view?usp=drive_link", // Economía
        2: "https://drive.google.com/file/d/1_zfZU8tSk9AjgG7chGJtfxP_O8wFRjrp/view?usp=drive_link", // Geografía
        3: "https://drive.google.com/file/d/1IC-qaL0ECjz_CZyMAK7A5ABkJsem0TH-/view?usp=drive_link", // Historia del Perú
        4: "https://drive.google.com/file/d/1xZTr3cEPaGZgbLshHXxQHRkSN5bzzHcw/view?usp=drive_link", // Historia Universal
        5: "https://docs.google.com/presentation/d/19Hx3-9ADYWfxCRLxrjddr3DCG2O7fS_U/edit?usp=drive_link", // Psicología
        7: "https://drive.google.com/file/d/1-rQSS5lsXv0RrfWR7vMIftdFNf18Cu5-/view?usp=drive_link", // Fortaleciendo mi Fe
        8: "https://drive.google.com/file/d/1xi6L0HCr3Ey6lMLzFw2ZehbXjdMSQypj/view?usp=drive_link", // Lenguaje
        9: "https://drive.google.com/file/d/1504yOLDd5k9_RZUBbFmXuyn7Dq6zxRcC/view?usp=drive_link", // Literatura
        10: "https://drive.google.com/file/d/194ILyM1-rBpk7Bu0N9Y7I6KCoOF5XC4c/view?usp=drive_link", // Razonamiento Verbal
        12: "https://docs.google.com/presentation/d/1k4kUeHnHGuzl8AGxhQzGuxAkAXPfcQqi/edit?usp=drive_link", // Tutoría
        13: "https://drive.google.com/file/d/12nwN92tZK7zArPDzF4B1oiDYAIjsV-QQ/view?usp=drive_link", // Biología
        14: "https://drive.google.com/file/d/1ovU3BdXDiRjpC6oPTUx2fIX_hG-yZ0Xw/view?usp=drive_link", // Física
        15: "https://drive.google.com/file/d/1HOCstPrLKLhwnFOLA5SQO8b_BJgi8-O8/view?usp=drive_link", // Química
        16: "https://drive.google.com/file/d/1lF7h5faA3LUwcRitDbbh-n596WeBXGn5/view?usp=drive_link", // Álgebra
        17: "https://drive.google.com/file/d/1ffWpZ8ZBErRiIr_LC05kDVn75lvxk5EC/view?usp=drive_link", // Aritmética
        18: "https://drive.google.com/file/d/1JxUTVqVh5099niIUrf7IO8ESUXsnh7p1/view?usp=drive_link", // Geometría
        19: "https://drive.google.com/file/d/1XKBqKBuuXi9jxwzA35taohQB20lbPOlS/view?usp=drive_link", // Razonamiento Matemático
        20: "https://drive.google.com/file/d/1a65EXnJF_nb7hzweLZ8Px7utM-4ZTuVI/view?usp=drive_link", // Trigonometría
        21: "https://drive.google.com/file/d/1uxRM836NoUCu5LMOM100auDV_JRljyxh/view?usp=drive_link" //cultura financiera
    },
    // ========== 5TO SECUNDARIA ==========
    "5to": {
        1: "https://drive.google.com/file/d/1PnVgBBDm84qH2gQ34mv83OIHQrn4ZoKw/view?usp=drive_link", // Economía
        2: "https://drive.google.com/file/d/1-54TsxKmbkDsR27WHQob4qClfT6eHkij/view?usp=drive_link", // Geografía
        3: "https://drive.google.com/file/d/1JKvquNOmMOBchiiJmttYMNeu2_cGOv0N/view?usp=drive_link", // Historia del Perú
        4: "https://drive.google.com/file/d/1tOBfWVV0FSLgHHsrCYe_N_BvWlaAr7Fv/view?usp=drive_link", // Historia Universal
        5: "https://docs.google.com/presentation/d/14brXh2FTNToiDN_qutiOhys8x9OcIveT/edit?usp=drive_link", // Psicología
        7: "https://drive.google.com/file/d/107Y4XfFohaPEP6lHveeSNyHzd_GlIv1W/view?usp=drive_link", // Fortaleciendo mi Fe
        8: "https://drive.google.com/file/d/1VP59mxyjD7j5zk4UfbGR-Xt5PWII4uaX/view?usp=drive_link", // Lenguaje
        9: "https://drive.google.com/file/d/1qTcW7ppGeND40ba5JIyVvxDr6bxt393W/view?usp=drive_link", // Literatura
        10: "https://drive.google.com/file/d/1fNBnhoMjm84zowCjOKPUnhiupMq7Or8U/view?usp=drive_link", // Razonamiento Verbal
        12: "https://docs.google.com/presentation/d/18g5qrMBKYuHIpU_qqe2AcFQX657a4__p/edit?usp=drive_link", // Tutoría
        13: "https://drive.google.com/file/d/1cfuSFmZ9jliQ1wItlX20QWZOW6Axa3ZB/view?usp=drive_link", // Biología
        14: "https://drive.google.com/file/d/1eOXu655I1kVrzhybR4eOWwp9g__623T2/view?usp=drive_link", // Física
        15: "https://drive.google.com/file/d/1BVBNL3Q7ibWKnysqWjmauezSGP6bxqJ-/view?usp=drive_link", // Química
        16: "https://drive.google.com/file/d/1kYOzwNndB4BE335H-G57wigvr3LPlyR3/view?usp=drive_link", // Álgebra
        17: "https://drive.google.com/file/d/1bjH_12LGEIy1G1XH-de5N_EVvkU70yzT/view?usp=drive_link", // Aritmética
        18: "https://drive.google.com/file/d/17JkKln2WpKGtCmwOs23IF7_WFsjyWlkR/view?usp=drive_link", // Geometría
        19: "https://drive.google.com/file/d/1z2NKDfb7AqZEwOWinyD2cgyHoICt59wT/view?usp=drive_link", // Razonamiento Matemático
        20: "https://drive.google.com/file/d/1GzOKcpq_yifBb96stKWSi-SXXQkxaxCK/view?usp=drive_link", // Trigonometría
        23: "https://drive.google.com/file/d/1fNBnhoMjm84zowCjOKPUnhiupMq7Or8U/view?usp=drive_link", // Razonamiento Verbal 2
        21: "https://drive.google.com/file/d/1YbOqiCa_CxYG6q7mGVyX2K8KPWbIkzmn/view?usp=drive_link" //cultura financiera
    },
    // ========== 5TO PRE ==========cambiar
    "5topre": {
        1: "https://drive.google.com/file/d/1m1w-VhBtg1JSWEEqGyV0opvkSoWdKb4e/view?usp=drive_link", // Economía
        2: "https://drive.google.com/file/d/1_YSEdNXR93ikjkP2u5jq884mWMI5o8qO/view?usp=drive_link", // Geografía
        3: "https://drive.google.com/file/d/1d5scKaZSVxF7uHOrYE0CtAKUZs-i0FF3/view?usp=drive_link", // Historia del Perú
        4: "https://drive.google.com/file/d/1uaitvSLzuLglryaBYLQpuYZbqcCh9A0J/view?usp=drive_link", // Historia Universal
        5: "https://drive.google.com/file/d/1943PvA5IsuaMouMo6jjzrnGvPs4gyleo/view?usp=drive_link", // Psicología
        8: "https://drive.google.com/file/d/1vbztZDttPOC_EggmRI4baThr_tHiqRzv/view?usp=drive_link", // Lenguaje
        9: "https://drive.google.com/file/d/1mddLbEyOwZHxaJ7qdlze1fE4qmilW4_i/view?usp=drive_link", // Literatura
        10: "https://drive.google.com/file/d/11MPe6yRDwLOf1L_fIaqroSASNbSAxaDB/view?usp=drive_link", // Razonamiento Verbal
        13: "https://drive.google.com/file/d/1nsVhz4A4u-Nkvpf3SE1F2wxsnPlFQWQT/view?usp=drive_link", // Biología
        14: "https://drive.google.com/file/d/1jLzY933z8tHS6L6yIGZelYiu8q70GeVu/view?usp=drive_link", // Física
        15: "https://drive.google.com/file/d/1oQaUZOFrSQFuFWLkh6nFwpMqnHNfF3pW/view?usp=drive_link", // Química
        16: "https://drive.google.com/file/d/1HW4CQwPRK8O4Z4Z4MDDIXugDexxnBgZD/view?usp=drive_link", // Álgebra
        17: "https://drive.google.com/file/d/1tyPWohxmE_AEjMa3S04ESQpHZp3MEbNK/view?usp=drive_link", // Aritmética
        18: "https://drive.google.com/file/d/1_63PuCc-fr08RPLobANsqqSIDq7NHE67/view?usp=drive_link", // Geometría
        19: "https://drive.google.com/file/d/1YCEtw9okGDGR8SNKJSfPXUdOhd5G1NhI/view?usp=drive_link", // Razonamiento Matemático
        20: "https://drive.google.com/file/d/1MynzrdbdPV3anyM9EQPbHx1i6YztDz7K/view?usp=drive_link", // Trigonometría
    },
    // ========== 5TO SAN MARCOS ==========
    "5tosm": {
        1: "https://drive.google.com/file/d/13x-f3G3UQgfIAR85Rd5vLQ6kN22-mifO/view?usp=drive_link", // Economía
        2: "https://drive.google.com/file/d/1QuNrfliRBKoRHRhc5Xk4XRFL8iWuFSQQ/view?usp=drive_link", // Geografía
        3: "https://drive.google.com/file/d/1Z_5qgriuQK9AM1aIN_741xfcE4MfSrxo/view?usp=drive_link", // Historia del Perú
        4: "https://drive.google.com/file/d/10CoMwoD6bUuY8F51kPkHky3K74pDDP3i/view?usp=drive_link", // Historia Universal
        5: "https://drive.google.com/file/d/12LuBpVqoua7V6J4Gnk-tt4GtP4-xjg7D/view?usp=drive_link", // Psicología
        8: "https://drive.google.com/file/d/1xTAW6DgdLZagKCBNoqSmFanmRh3JvwSv/view?usp=drive_link", // Lenguaje
        9: "https://drive.google.com/file/d/1jcW4LUXndtxTCugfQ3OdMr6sB42Uzybx/view?usp=drive_link", // Literatura
        10: "https://drive.google.com/file/d/1tAnNgYfFjG26u5b_HorU-MMEUoVH9bwL/view?usp=drive_link", // Razonamiento Verbal
        13: "https://drive.google.com/file/d/1gHGPIPakl_Yc70m10eAnbT09HDebhLhJ/view?usp=drive_link", // Biología
        14: "https://drive.google.com/file/d/1L5YS9xnhOYQKoVd49BhJJGckEygTPU-o/view?usp=drive_link", // Física
        15: "https://drive.google.com/file/d/1XUv9akn2gMYeQj9sx5G_xdCb0kp4iSQq/view?usp=drive_link", // Química
        16: "https://drive.google.com/file/d/1HUUNnOl8vfnuzMyxOitr02JuwgIyn1VL/view?usp=drive_link", // Álgebra
        17: "https://drive.google.com/file/d/1KmiumukqvOTNVbNYffvhH6DjH7nEvxZk/view?usp=drive_link", // Aritmética
        18: "https://drive.google.com/file/d/1FbqmWwGNJ7NTltSa8MFw2mUjTy5Qb0jL/view?usp=drive_link", // Geometría
        19: "https://drive.google.com/file/d/1bLlyh4SdKJEcM4Z36m03uamrrtRR5VcD/view?usp=drive_link", // Razonamiento Matemático
        20: "https://drive.google.com/file/d/1QlkEzUuTFrucj0l_jeLwEaeXtLReRM9c/view?usp=drive_link", // Trigonometría
    },
    // ========== 5TO UNI ==========
    "5touni": {
        14: "https://drive.google.com/file/d/1XLXX5Ni3Mgi35sWsJzX5w__Y_chsOFJ7/view?usp=drive_link", // Física
        15: "https://drive.google.com/file/d/1SoHIAxZwskX8qG7A7hILQ4V6U9yjHstf/view?usp=drive_link", // Química
        16: "https://drive.google.com/file/d/1etf2u8ABLZPR-sWHYDTfgwoAp9OkGzEk/view?usp=drive_link", // Álgebra
        17: "https://drive.google.com/file/d/1nVmRob5uGZmb3SQv3c4NY-Zyrsa-IbuR/view?usp=drive_link", // Aritmética
        18: "https://drive.google.com/file/d/1Rw3rC1QkzEQ7YvPFf3lMgwCr0ycn7BUq/view?usp=drive_link", // Geometría
        20: "https://drive.google.com/file/d/1TqJ8WeYRaKR2lC7PrhlrptaX4DuNjDl0/view?usp=drive_link", // Trigonometría
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
    { id: 21, name: "Cultura Financiera", description: "Cultura Financiera", icon: "fas fa-heart", color: "#e63946", area: "sociales" },
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
    { id: "5to", name: "5to Secundaria", icon: "fas fa-star" },
    { id: "5topre", name: "5to Pre", icon: "fas fa-star" },
    { id: "5tosm", name: "5to San Marcos ", icon: "fas fa-star" },
    { id: "5touni", name: "5to UNI", icon: "fas fa-star" }
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