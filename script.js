// ============================================================
// CONFIGURACIÓN: ENLACES DE GOOGLE DRIVE POR GRADO, TOMO Y CURSO
// ============================================================
// Estructura: driveLinks[grado][tomo][idCurso] = "URL"
// grados: "1ro", "2do", "3ro", "4to", "5to"
// tomos: "tomo-i", "tomo-ii", "tomo-iii", "tomo-iv", "tomo-v", "tomo-vi", "tomo-vii", "tomo-viii"
// idCurso: del 1 al 23 (ver lista de cursos más abajo)
//
// INSTRUCCIONES: Reemplaza las URL de ejemplo con tus enlaces reales de Drive.
// ============================================================

const driveLinks = {
    // ========== 1RO SECUNDARIA ==========
    "1ro": {
        "tomo-i": {
            2: "https://drive.google.com/file/d/1XZjsFFkxUWrKdI7Xfn8Qm20Jni7Fh5qd/view?usp=drive_link", // Geografía
            3: "https://drive.google.com/file/d/1FjNXDnr9omKyqG3T_KI6VjOdwqam8fdi/view?usp=drive_link", // Historia del Perú
            6: "https://drive.google.com/file/d/10FtPNJ6YGEwbNK8ZhYrybZJ3XLsR3iBn/view?usp=drive_link", // Valores
            7: "https://drive.google.com/file/d/1hH8662UuRdXDOfTicobcxLhmQuS9qNvU/view?usp=drive_link", // Fortaleciendo mi Fe
            8: "https://drive.google.com/file/d/1nrTlKpUTXNRAhrqhkiKaLoRjHRcvPOoS/view?usp=drive_link", // Lenguaje
            9: "https://drive.google.com/file/d/1Kj_LdnbTFgmSQfho2TTSme7PVo7fcTsV/view?usp=drive_link", // Literatura
            10: "https://drive.google.com/file/d/1xDwrKtEMNcxuWqMhQmeeBADQZ--Dxfd2/view?usp=drive_link", // Razonamiento Verbal 1
            11: "https://drive.google.com/file/d/1iRoU4XpwnxusOkorAcLVp1SlhhvaWzCj/view?usp=drive_link", // Teatro
            //12: "https://docs.google.com/presentation/d/1mfOCpPI-mQMEQ-W7-AXz8kh4Weto4cU2/edit?usp=drive_link", // Tutoría
            13: "https://drive.google.com/file/d/1tToXWAnm7qzeyW9gTdPtJaGixhL-StdI/view?usp=drive_link", // Biología
            14: "https://drive.google.com/file/d/1-t1lbHCI7W1aFhtVw68lQDAHjLxJ2e7d/view?usp=drive_link", // Física
            15: "https://drive.google.com/file/d/1XqCraUd-glH14TZ5yorr3KjZoF15YyvJ/view?usp=drive_link", // Química
            16: "https://drive.google.com/file/d/1PkAMbSfkI5xuzuiceyo7Z8FIoKsaXTDw/view?usp=drive_link", // Álgebra
            17: "https://drive.google.com/file/d/16hmUNs6z1_2Ad-R0bpzZMCLuRzsQy_8y/view?usp=drive_link", // Aritmética
            18: "https://drive.google.com/file/d/12J-bN9ExwAP6iolPcluvOMJ8HLQuR1nD/view?usp=drive_link", // Geometría
            19: "https://drive.google.com/file/d/1vu5dTLYYh9JRIXEPkIt3wYSbuM2-zUGC/view?usp=drive_link", // Razonamiento Matemático
            20: "https://drive.google.com/file/d/1Oiep4gpdoM7L3N2IM_sk2DnxoNlcSTBd/view?usp=drive_link", // Trigonometría
        },
        "tomo-ii": {
            2: "https://drive.google.com/file/d/1Gben4FjA_uavS9zulDLrAClXNOrvUP9y/view?usp=drive_link", // Geografía
            3: "https://drive.google.com/file/d/1PqtJ0Cr396wZRZNvk05EOAo0XIVGDTw4/view?usp=drive_link", // Historia del Perú
            6: "https://drive.google.com/file/d/10KD1sxQvYZfFqeHBcVBNy0_HjTrJSEBh/view?usp=drive_link", // Valores
            7: "https://drive.google.com/file/d/1sdcgN4-97QqoDdrosOpGcdczclkI8Hbv/view?usp=drive_link", // Fortaleciendo mi Fe
            8: "https://drive.google.com/file/d/1slRgf8l6UrGCn2g8BDvUvVf2lXJ_Qs2I/view?usp=drive_link", // Lenguaje
            9: "https://drive.google.com/file/d/1hHXwEvwpqbZuYfQ_PbYuN8OOxpVyTAZU/view?usp=drive_link", // Literatura
            10: "https://drive.google.com/file/d/1l45Va0JHgBe4Z6ZdXyLLA5rd14ZTk3cL/view?usp=drive_link", // Razonamiento Verbal 1
            11: "https://drive.google.com/file/d/1pNTdjSStgXRkF2OGW0nYTDF5GtdEnOSL/view?usp=drive_link", // Teatro
            //12: "https://docs.google.com/presentation/d/1mfOCpPI-mQMEQ-W7-AXz8kh4Weto4cU2/edit?usp=drive_link", // Tutoría
            13: "https://drive.google.com/file/d/1w2WjQnY6YhKJa71Ks3gIVDW3_aAKNX6A/view?usp=drive_link", // Biología
            14: "https://drive.google.com/file/d/17JKiyAW8O77Cn4M_4w4k7Hv4yOpvW8wP/view?usp=drive_link", // Física
            15: "https://drive.google.com/file/d/1hhPEXS0sJcoEnNpvnOInBjt6x0syLCmJ/view?usp=drive_link", // Química
            16: "https://drive.google.com/file/d/1OY1LKYUaNVfGnSvo8SLq6LB8hcrcoUvl/view?usp=drive_link", // Álgebra
            17: "https://drive.google.com/file/d/1L-U6yc1zLjWA4f6hupL2M45SmQhNsk5C/view?usp=drive_link", // Aritmética
            18: "https://drive.google.com/file/d/1WCzYPvjEBhoDPZbxDu3NfWBSRHw-Sjt7/view?usp=drive_link", // Geometría
            19: "https://drive.google.com/file/d/1RwgtElvlo4vzyWGMtWOvuWy5Q5QEa9_W/view?usp=drive_link", // Razonamiento Matemático
            20: "https://drive.google.com/file/d/1Dtk2yzGbj_5cl2ISm0hl7hyuU8CkY9g2/view?usp=drive_link", // Trigonometría
        },
        "tomo-iii": {
            2: "https://drive.google.com/file/d/1AOyh59hWQGvp8_4-G435Y_i_pt5Fim0d/view?usp=drive_link", // Geografía
            3: "https://drive.google.com/file/d/1Sm5Tupxcs5q1L055S8IaAqZ9mVfLHgCa/view?usp=drive_link", // Historia del Perú
            6: "https://drive.google.com/file/d/10KD1sxQvYZfFqeHBcVBNy0_HjTrJSEBh/view?usp=drive_link", // Valores
            7: "https://drive.google.com/file/d/1sdcgN4-97QqoDdrosOpGcdczclkI8Hbv/view?usp=drive_link", // Fortaleciendo mi Fe
            8: "https://drive.google.com/file/d/1R0sNDLn_wiiMe1ya9t5dbjHfyipkXis0/view?usp=drive_link", // Lenguaje
            9: "https://drive.google.com/file/d/1MQ1qnUZD4KCg6Jqe3VQJfTM7KtPOjqai/view?usp=drive_link", // Literatura
            10: "https://drive.google.com/file/d/1G_qJs2h0Q6gLN9Mu7U0H0uZy5RCCdlEY/view?usp=drive_link", // Razonamiento Verbal 1
            11: "https://drive.google.com/file/d/10kP5aPwk3MEXe82Wzbl0o3Mwafmw1yX1/view?usp=drive_link", // Teatro
            //12: "https://docs.google.com/presentation/d/1mfOCpPI-mQMEQ-W7-AXz8kh4Weto4cU2/edit?usp=drive_link", // Tutoría
            13: "https://drive.google.com/file/d/13XIXyabeeLRz79Swz4pw0grNOm0NCMWT/view?usp=drive_link", // Biología
            14: "https://drive.google.com/file/d/1P3I5E-KZ-rDu-ILXs6JNDihAcAEq2wbF/view?usp=drive_link", // Física
            15: "https://drive.google.com/file/d/1kIFJp1rHPu75f7RHKGGpKxMkOwuX6KM_/view?usp=drive_link", // Química
            16: "https://drive.google.com/file/d/1hULPLouac0Dc3xW-kRAKHodnZQyOyvdR/view?usp=drive_link", // Álgebra
            17: "https://drive.google.com/file/d/1l0vD2mBFuhhGNjWhuGhdkSMbM7KInl6E/view?usp=drive_link", // Aritmética
            18: "https://drive.google.com/file/d/1MpxSK22XJe_pcYjgM72RcS8Zfw2ecAg4/view?usp=drive_link", // Geometría
            19: "https://drive.google.com/file/d/1vkD03AIA3rOBuT6ZrFIlt3Ri4HBQIHum/view?usp=drive_link", // Razonamiento Matemático
            20: "https://drive.google.com/file/d/1f-xlNUQMp4WwgpWK-XJSbb7mjl22mjjV/view?usp=drive_link", // Trigonometría
        }
    },
    // ========== 2DO SECUNDARIA ==========
    "2do": {
        "tomo-i": {
            2: "https://drive.google.com/file/d/1nN-ZpWMLvpPn-A1Q3L6wi3VavF1BU3Dj/view?usp=drive_link", // Geografía
            3: "https://drive.google.com/file/d/1sW6LNmYadjQfBgY535lf6ojpC13yO-KA/view?usp=drive_link", // Historia del Perú
            6: "https://drive.google.com/file/d/1mioy4z8Vnyviv_ViZzKUnMC44g8tmokn/view?usp=drive_link", // Valores
            7: "https://drive.google.com/file/d/1OjzXHkqxiEeoV40ZYOjzjsXyMaXLz13J/view?usp=drive_link", // Fortaleciendo mi Fe
            8: "https://drive.google.com/file/d/1qb2_9gt1OzY6YCGmRHI3bP4CPrViU5mu/view?usp=drive_link", // Lenguaje
            9: "https://drive.google.com/file/d/1CqL_PClfXR6WstyYmUG_uSh9njAs-Gzw/view?usp=drive_link", // Literatura
            10: "https://drive.google.com/file/d/1Wa4y6g1hscZ8_e_UwSHARTaGJfHslORA/view?usp=drive_link", // Razonamiento Verbal 1
            11: "https://drive.google.com/file/d/1wpi216pZiBcbwWCr3RZKGW9Gj-ATsdmA/view?usp=drive_link", // Teatro
            //12: "https://docs.google.com/presentation/d/1mfOCpPI-mQMEQ-W7-AXz8kh4Weto4cU2/edit?usp=drive_link", // Tutoría
            13: "https://drive.google.com/file/d/1gt1HH63ELBxGBdVqqgudPLerWm7lnYzZ/view?usp=drive_link", // Biología
            14: "https://drive.google.com/file/d/199lYxBq9Hz7J4T0CmTcPXMX7M1KmHv85/view?usp=drive_link", // Física
            15: "https://drive.google.com/file/d/1hCS2dmCqavku1JXqJH8hUCPpzuLAQWb_/view?usp=drive_link", // Química
            16: "https://drive.google.com/file/d/1QCfabnwdZp2MyouD9dBazmainb9pq3ox/view?usp=drive_link", // Álgebra
            17: "https://drive.google.com/file/d/1b9lO734tnMQpu2zOG6Zi49c_aRK_-MEr/view?usp=drive_link", // Aritmética
            18: "https://drive.google.com/file/d/1DeWup271MmnT3kELXzOMV4R0cRPLm3xo/view?usp=drive_link", // Geometría
            19: "https://drive.google.com/file/d/1EfEznOeu5X2D0b01Gwf-M72uklut8sFo/view?usp=drive_link", // Razonamiento Matemático
            20: "https://drive.google.com/file/d/1Hl_U6dVdMNH7rH7CDwuWTJUkX3gWop28/view?usp=drive_link" // Trigonometría
        },
        "tomo-ii": {
            2: "https://drive.google.com/file/d/1lSYwQ2TDBquWvjg1p5i0YORzO-c8v8ND/view?usp=drive_link", // Geografía
            3: "https://drive.google.com/file/d/1uPJCTd7PZjXVsZZ9ipZAIYpY7lZWvYxJ/view?usp=drive_link", // Historia del Perú
            6: "https://drive.google.com/file/d/1SpH6rAN1IXrFmKVGMNRFb85Qis8UACpy/view?usp=drive_link", // Valores
            7: "https://drive.google.com/file/d/1C7oIFBtUOol3dDN-r4l6MmfMZeRqadB4/view?usp=drive_link", // Fortaleciendo mi Fe
            8: "https://drive.google.com/file/d/1xBMnfsVvAJ6zDqhfDMea-AzsQ5ozsWOv/view?usp=drive_link", // Lenguaje
            9: "https://drive.google.com/file/d/1OOakOXaMB5g7V3yMOh8LmUJo4MfWbgqj/view?usp=drive_link", // Literatura
            10: "https://drive.google.com/file/d/1lc9IEaqlLBeKXVszqqVfi3p2ymsmdw8n/view?usp=drive_link", // Razonamiento Verbal 1
            11: "https://drive.google.com/file/d/1xfJfoXO6ygwcPIVCT2vw1SGrTGAUOvpl/view?usp=drive_link", // Teatro
            //12: "https://docs.google.com/presentation/d/1mfOCpPI-mQMEQ-W7-AXz8kh4Weto4cU2/edit?usp=drive_link", // Tutoría
            13: "https://drive.google.com/file/d/1H31CjICkPbVT8sisQtpAMVcHKHpSaC4G/view?usp=drive_link", // Biología
            14: "https://drive.google.com/file/d/1oonzHMaEAqkoXnjWtGBrLe1S9NaObgSJ/view?usp=drive_link", // Física
            15: "https://drive.google.com/file/d/19tRJGwBxQo-aJ79MqgUiwf6L74x0jXeJ/view?usp=drive_link", // Química
            16: "https://drive.google.com/file/d/1w7mMPYJmZPWqC6e1ZL3A_Dw1PzTWkAjI/view?usp=drive_link", // Álgebra
            17: "https://drive.google.com/file/d/1vGMqVrbBREbRnfAlM1ovG149AMH4wadn/view?usp=drive_link", // Aritmética
            18: "https://drive.google.com/file/d/1iXsHlGDcpZ9bwaaUq_7l2U_vbFp2IkGJ/view?usp=drive_link", // Geometría
            19: "https://drive.google.com/file/d/1t2CxuAMKQuJk4k9OPw19yFc5pTAe7wW_/view?usp=drive_link", // Razonamiento Matemático
            20: "https://drive.google.com/file/d/1xA9wXF4eSNbuWqF8ntPdMjVpMlm4vyis/view?usp=drive_link" // Trigonometría
        },
        "tomo-iii": {
            2: "https://drive.google.com/file/d/1xiSd50eSSDWfe3zWXJkUTaPHwz1VynPp/view?usp=drive_link", // Geografía
            3: "https://drive.google.com/file/d/1UE9WTM634rGorsPCjLP-YMeRkrNfal8i/view?usp=drive_link", // Historia del Perú
            6: "https://drive.google.com/file/d/10KD1sxQvYZfFqeHBcVBNy0_HjTrJSEBh/view?usp=drive_link", // Valores
            7: "https://drive.google.com/file/d/1sdcgN4-97QqoDdrosOpGcdczclkI8Hbv/view?usp=drive_link", // Fortaleciendo mi Fe
            8: "https://drive.google.com/file/d/1QcOqxstBLn4vaOo0tjK_K4JkNYBOuq3F/view?usp=drive_link", // Lenguaje
            9: "https://drive.google.com/file/d/1JhQTbccztcG0Wez-bsmLupMbzXH68ixh/view?usp=drive_link", // Literatura
            10: "https://drive.google.com/file/d/1_iKzh8sjmEgJkSdatuqVJ9TdFj7xWOKA/view?usp=drive_link", // Razonamiento Verbal 1
            11: "https://drive.google.com/file/d/1D3yws_JcmGvFSO4QeKIyxXzZPyFGXO8a/view?usp=drive_link", // Teatro
            //12: "https://docs.google.com/presentation/d/1mfOCpPI-mQMEQ-W7-AXz8kh4Weto4cU2/edit?usp=drive_link", // Tutoría
            13: "https://drive.google.com/file/d/1NwN0347qd-U18eCFobaj6UdWWjyMLMuL/view?usp=drive_link", // Biología
            14: "https://drive.google.com/file/d/1ifnQh1xBBkftrpp1Ib2aPbQWHHphvFzI/view?usp=drive_link", // Física
            15: "https://drive.google.com/file/d/1bKO16O_cNyZ_EBCI1_enXYpQ2sF91Bj3/view?usp=drive_link", // Química
            16: "https://drive.google.com/file/d/1BoRJQ4LWNL3CEO2HmDJ1vUsHlZU4CbWI/view?usp=drive_link", // Álgebra
            17: "https://drive.google.com/file/d/1dyMRk9pMdfH9F87Kvj2bwHE0-mOMdmkz/view?usp=drive_link", // Aritmética
            18: "https://drive.google.com/file/d/1nkb7WFgY6wYG_KbfYEEKuswCafjMpG07/view?usp=drive_link", // Geometría
            19: "https://drive.google.com/file/d/13eEEbhYjxoWEKzHCk20AwQMpK7rMVQvn/view?usp=drive_link", // Razonamiento Matemático
            20: "https://drive.google.com/file/d/1BZixxiKaQr--aFHoc8zVoZN7CcIaHdYJ/view?usp=drive_link", // Trigonometría
        }
    },
    "3ro": {
        "tomo-i": {
            1: "https://drive.google.com/file/d/1xUNN6dQ0JG9Jt2W9F5MgxUPFGxorGGTV/view?usp=drive_link",//Economía
            2: "https://drive.google.com/file/d/1aqWDKZi0ZYYBifjZxefVqK5LgozB_9si/view?usp=drive_link", // Geografía
            3: "https://drive.google.com/file/d/1UkgPBk080EW6Di0nkxDdAzpfHLbAaPQq/view?usp=drive_link", // Historia del Perú
            4: "https://drive.google.com/file/d/1lPexoQ2oxFgS9QyA1X_B56-oPi4yhaDC/view?usp=drive_link", // Historia Universal
            5: "https://drive.google.com/file/d/182Gr-YmNnADrYa3cz3InG6U3ESeW4NYy/view?usp=drive_link", // psicologia
            7: "https://drive.google.com/file/d/122Kyd8wrE-hlhK_9YQP2y2pfVrnsjfAu/view?usp=drive_link", // Fortaleciendo mi Fe
            8: "https://drive.google.com/file/d/14w51k0O51esfVzh4sG8r8sHjJS8g7LsF/view?usp=drive_link", // Lenguaje
            9: "https://drive.google.com/file/d/1ivU48Mem0LErnuRDcbkcQ1OKULosJQWr/view?usp=drive_link", // Literatura
            10: "https://drive.google.com/file/d/1KF4JndwgjTRF8s2kB5e8P2NC-gZlpfhl/view?usp=drive_link", // Razonamiento Verbal 1
            //12: "https://docs.google.com/presentation/d/1mfOCpPI-mQMEQ-W7-AXz8kh4Weto4cU2/edit?usp=drive_link", // Tutoría
            13: "https://drive.google.com/file/d/1-NLbcC_8Vqb-l_iQp0-vRcBwsL_8-tLY/view?usp=drive_link", // Biología
            14: "https://drive.google.com/file/d/1gTHUmBpNbKs24GXJ9gzDuFmMH5Hnx05s/view?usp=drive_link", // Física
            15: "https://drive.google.com/file/d/1UwnccTJw22LQR0v9O1DayR1xI-o00_uR/view?usp=drive_link", // Química
            16: "https://drive.google.com/file/d/1NXyVJTWHpPuHFVmDv0a9XMQI5Xoj92-8/view?usp=drive_link", // Álgebra
            17: "https://drive.google.com/file/d/16wPaDyB8sn6_jmDWbw5HiE_RYnnmV17y/view?usp=drive_link", // Aritmética
            18: "https://drive.google.com/file/d/1D9Z7X2s4zIGofk1gUo7aPNj7y_EMp8Eb/view?usp=drive_link", // Geometría
            19: "https://drive.google.com/file/d/1rCm0vyNVxICHtsD6wP7t0pgbq4dZyE9q/view?usp=drive_link", // Razonamiento Matemático
            20: "https://drive.google.com/file/d/1z20148YrRAd91P5IFOW3w_EqSImGwNYL/view?usp=drive_link" // Trigonometría
         },
        "tomo-ii": {
            1: "https://drive.google.com/file/d/14xxjGWJbx5X_yK527WuZb2xea_woNHU1/view?usp=drive_link",//Economía
            2: "https://drive.google.com/file/d/1-BK-9uJJXd-GnY1kPe0VgBQiHuGFy_R5/view?usp=drive_link", // Geografía
            3: "https://drive.google.com/file/d/1ADFY_9Oj-jHahIsm2cUd2b19AuDwgICu/view?usp=drive_link", // Historia del Perú
            4: "https://drive.google.com/file/d/1jj_cK_w13MyTozSgSuMMa0w2n_cdUSPZ/view?usp=drive_link", // Historia Universal
            5: "https://drive.google.com/file/d/1LuaJaqHFZB_qcpdVDyq3VX74VtSSKEr4/view?usp=drive_link", // psicologia
            7: "https://drive.google.com/file/d/1T3A9IFDlD00W1r2PtaiMMZPe-Knq0FdR/view?usp=drive_link", // Fortaleciendo mi Fe
            8: "https://drive.google.com/file/d/1CuA20OIJMkZHi_Bs8RVx6olCIchLJXfQ/view?usp=drive_link", // Lenguaje
            9: "https://drive.google.com/file/d/1akjyGPEE6r2dOWwNIclEn3-Cf8Qx4nfn/view?usp=drive_link", // Literatura
            10: "https://drive.google.com/file/d/1mvMxnzB89x-svf0mxLbBgoCA49VhN51F/view?usp=drive_link", // Razonamiento Verbal 1
            //12: "https://docs.google.com/presentation/d/1mfOCpPI-mQMEQ-W7-AXz8kh4Weto4cU2/edit?usp=drive_link", // Tutoría
            13: "https://drive.google.com/file/d/1opihxpY8tr4Wg2bTH_fMcFb7hMJThkwb/view?usp=drive_link", // Biología
            14: "https://drive.google.com/file/d/1Eh3kmIJjH-xu_Ppzr3CyKB5XVy8jWpx2/view?usp=drive_link", // Física
            15: "https://drive.google.com/file/d/1Pdp7lfzcuDf69eE_kJhIrx0azU5hicGx/view?usp=drive_link", // Química
            16: "https://drive.google.com/file/d/1FcFPQhALMD4J1fgPP0_2sqqxpRpBmn9W/view?usp=drive_link", // Álgebra
            17: "https://drive.google.com/file/d/1tGgr68w00TtzGBM8t74u2hXLQTbCnlvI/view?usp=drive_link", // Aritmética
            18: "https://drive.google.com/file/d/1j1YxkRj6ORjrIdeH5zJjGCVeteiun5_q/view?usp=drive_link", // Geometría
            19: "https://drive.google.com/file/d/1zZK_Os10kLShugCDrFT-sAScUqZ-k2px/view?usp=drive_link", // Razonamiento Matemático
            20: "https://drive.google.com/file/d/1KRsvnMVDIZk_kthZlCH27K_7hX315BUl/view?usp=drive_link" // Trigonometría
        },
        "tomo-iii": {
            1: "https://drive.google.com/file/d/1wcbyfeLgMod_TQVqx79vYyEtjfHwz7IG/view?usp=drive_link",//Economía
            2: "https://drive.google.com/file/d/199WgkfWpO7aEVeth50261NC9TboH-8hu/view?usp=drive_link", // Geografía
            3: "https://drive.google.com/file/d/1WRgWigYpV6qJrYQZawvKIoIbclwRo0QP/view?usp=drive_link", // Historia del Perú
            4: "https://drive.google.com/file/d/11YfM13_pyKsYj_hK9a_svBUNnLwF22HC/view?usp=drive_link", // Historia Universal
            5: "https://drive.google.com/file/d/1ImtvD7UGiBfvFNYLpBLTF_nlw3HRBrG3/view?usp=drive_link", // psicologia
            7: "https://drive.google.com/file/d/1T3A9IFDlD00W1r2PtaiMMZPe-Knq0FdR/view?usp=drive_link", // Fortaleciendo mi Fe
            8: "https://drive.google.com/file/d/1KrU0xuMpUjeZBPsW8CguOb6WDKzy5lhH/view?usp=drive_link", // Lenguaje
            9: "https://drive.google.com/file/d/1C4OT7lNF0FjMaH1YLOLpkV2D06crCk68/view?usp=drive_link", // Literatura
            10: "https://drive.google.com/file/d/18BY1YupaFUtmAGVWmuZJOjSZ4GfqOeFb/view?usp=drive_link", // Razonamiento Verbal 1
            //12: "https://docs.google.com/presentation/d/1mfOCpPI-mQMEQ-W7-AXz8kh4Weto4cU2/edit?usp=drive_link", // Tutoría
            13: "https://drive.google.com/file/d/19iaud_EJe0nrguE84ZRbw01lBeTVWgLM/view?usp=drive_link", // Biología
            14: "https://drive.google.com/file/d/1t00Qi_u7JYbEn7DokfSOiSREDDAJm2hU/view?usp=drive_link", // Física
            15: "https://drive.google.com/file/d/1NnXLlf4W-GWnw6ZVre2C7X1whGTMmuGs/view?usp=drive_link", // Química
            16: "https://drive.google.com/file/d/1xrjZE-0Fc_bq4G2R5VgcS7l3ZtHmrVps/view?usp=drive_link", // Álgebra
            17: "https://drive.google.com/file/d/1zJw4MS8fqAgIqYLVY3MwwV4Rdz_Ucmul/view?usp=drive_link", // Aritmética
            18: "https://drive.google.com/file/d/1WqmsQeWx6CLy3w858NGfaRJKa4i4id79/view?usp=drive_link", // Geometría
            19: "https://drive.google.com/file/d/1XelJoE5zdzu0IIL0BUQ_U-4N6K3erOTS/view?usp=drive_link", // Razonamiento Matemático
            20: "https://drive.google.com/file/d/1TAinKtwSEJW_Hy3rL0lHRsrBmdw7Kaqi/view?usp=drive_link" // Trigonometría
        }
    },
    "4to": {
        "tomo-i": {
            1: "https://drive.google.com/file/d/1LjIQVa5VHFscEna5Eb3NAyHZ7FLHQyG_/view?usp=drive_link",//Economía
            2: "https://drive.google.com/file/d/1dz6RjI-F2CnABVQG8owYRimSUpf770Zj/view?usp=drive_link", // Geografía
            3: "https://drive.google.com/file/d/1wxznFaIov0lVRv3wHwINdtv8yOPtjclH/view?usp=drive_link", // Historia del Perú
            4: "https://drive.google.com/file/d/1l-c8l5xO7pdljcUedcRaW61-xQvX9T0_/view?usp=drive_link", // Historia Universal
            5: "https://drive.google.com/file/d/1X0yUaRMe6-xwa0eCug9sLfIIglLzNkjP/view?usp=drive_link", // psicologia
            7: "https://drive.google.com/file/d/1-rQSS5lsXv0RrfWR7vMIftdFNf18Cu5-/view?usp=drive_link", // Fortaleciendo mi Fe
            8: "https://drive.google.com/file/d/1BR5M6KjmvYI7BexMLiGJZzj25fezk70Q/view?usp=drive_link", // Lenguaje
            9: "https://drive.google.com/file/d/1ZVQbFnC3JNs-OUqqXW2nhvTiCvGuNqT7/view?usp=drive_link", // Literatura
            10: "https://drive.google.com/file/d/1RsJE_bv6mW5blfzMoF2Qgs8ph9qB5a9W/view?usp=drive_link", // Razonamiento Verbal 1
           // 12: "https://docs.google.com/presentation/d/1mfOCpPI-mQMEQ-W7-AXz8kh4Weto4cU2/edit?usp=drive_link", // Tutoría
            13: "https://drive.google.com/file/d/1QPLN1_iH9hxqqHFN_rHrU-V9JOuHsrmL/view?usp=drive_link", // Biología
            14: "https://drive.google.com/file/d/1zuBBCdXYVVD944dafcOw0-KgNJYqYtbV/view?usp=drive_link", // Física
            15: "https://drive.google.com/file/d/13iB7kVGwalIwOxSUVRat5l28886S8GdB/view?usp=drive_link", // Química
            16: "https://drive.google.com/file/d/11ANWbz7ImZpR6Axfm6mctZn56ehTE7yj/view?usp=drive_link", // Álgebra
            17: "https://drive.google.com/file/d/1ox1pvNyDnQPTRX3PUs6IPnig-pRZ3ShC/view?usp=drive_link", // Aritmética
            18: "https://drive.google.com/file/d/1MYxfFfQp-skc7vb_uQp6FWyqnqtkLkwB/view?usp=drive_link", // Geometría
            19: "https://drive.google.com/file/d/1O5TzRxpNh6Ag4f7i24n68dGEEYEUdXtr/view?usp=drive_link", // Razonamiento Matemático
            20: "https://drive.google.com/file/d/1ijxOLxfhRp7Mk_uLnifJUn6J5_nAmeIa/view?usp=drive_link" // Trigonometría
         },
        "tomo-ii": {
            1: "https://drive.google.com/file/d/1JKTSvrY_NC5ZwbnBeFb46_dwroUQ83HH/view?usp=drive_link",//Economía
            2: "https://drive.google.com/file/d/1_zfZU8tSk9AjgG7chGJtfxP_O8wFRjrp/view?usp=drive_link", // Geografía
            3: "https://drive.google.com/file/d/1JKvquNOmMOBchiiJmttYMNeu2_cGOv0N/view?usp=drive_link", // Historia del Perú
            4: "https://drive.google.com/file/d/1xZTr3cEPaGZgbLshHXxQHRkSN5bzzHcw/view?usp=drive_link", // Historia Universal
            5: "https://drive.google.com/file/d/1JXCKJkpFvbgHdz3b_zw_5gBJP7cNB4XW/view?usp=drive_link", // psicologia
            7: "https://drive.google.com/file/d/1Jcazm5xrBUFy52eQWbiWLSKwk9VKHncA/view?usp=drive_link", // Fortaleciendo mi Fe
            8: "https://drive.google.com/file/d/1xi6L0HCr3Ey6lMLzFw2ZehbXjdMSQypj/view?usp=drive_link", // Lenguaje
            9: "https://drive.google.com/file/d/1504yOLDd5k9_RZUBbFmXuyn7Dq6zxRcC/view?usp=drive_link", // Literatura
            10: "https://drive.google.com/file/d/194ILyM1-rBpk7Bu0N9Y7I6KCoOF5XC4c/view?usp=drive_link", // Razonamiento Verbal 1
            //12: "https://docs.google.com/presentation/d/1mfOCpPI-mQMEQ-W7-AXz8kh4Weto4cU2/edit?usp=drive_link", // Tutoría
            13: "https://drive.google.com/file/d/12nwN92tZK7zArPDzF4B1oiDYAIjsV-QQ/view?usp=drive_link", // Biología
            14: "https://drive.google.com/file/d/1e-U1iRXIYPNDcgiK2ZwyoCeAE6rIQ-va/view?usp=drive_link", // Física
            15: "https://drive.google.com/file/d/1HOCstPrLKLhwnFOLA5SQO8b_BJgi8-O8/view?usp=drive_link", // Química
            16: "https://drive.google.com/file/d/1lF7h5faA3LUwcRitDbbh-n596WeBXGn5/view?usp=drive_link", // Álgebra
            17: "https://drive.google.com/file/d/1ffWpZ8ZBErRiIr_LC05kDVn75lvxk5EC/view?usp=drive_link", // Aritmética
            18: "https://drive.google.com/file/d/1JxUTVqVh5099niIUrf7IO8ESUXsnh7p1/view?usp=drive_link", // Geometría
            19: "https://drive.google.com/file/d/1XKBqKBuuXi9jxwzA35taohQB20lbPOlS/view?usp=drive_link", // Razonamiento Matemático
            20: "https://drive.google.com/file/d/1Dtk2yzGbj_5cl2ISm0hl7hyuU8CkY9g2/view?usp=drive_link" // Trigonometría
        },
        "tomo-iii": {
            1: "https://drive.google.com/file/d/1GhcE7qcdyYkRzv_xFat8dupin8ayBuuc/view?usp=drive_link",//Economía
            2: "https://drive.google.com/file/d/1D-6Rmon-C6ecXmCRiMEL58KuIgQ7IXf5/view?usp=drive_link", // Geografía
            3: "https://drive.google.com/file/d/157RvGrgMLmwNbEiUyEdkQ3Kh7kshWcDG/view?usp=drive_link", // Historia del Perú
            4: "https://drive.google.com/file/d/1rDUQNSgMH7Qr7pdprF7QNKO1fVLm2Kmp/view?usp=drive_link", // Historia Universal
            5: "https://drive.google.com/file/d/1ywUOCLNG9nnkT20WkFUgpOMf-4esT-CN/view?usp=drive_link", // psicologia
            7: "https://drive.google.com/file/d/1Jcazm5xrBUFy52eQWbiWLSKwk9VKHncA/view?usp=drive_link", // Fortaleciendo mi Fe
            8: "https://drive.google.com/file/d/1J8NdqM6PWUq4tmGBy62xpk56FXyexE-b/view?usp=drive_link", // Lenguaje
            9: "https://drive.google.com/file/d/1C_0vUN47vV7dQqGOf2exC9UI06MbcOvN/view?usp=drive_link", // Literatura
            10: "https://drive.google.com/file/d/1ZnbMBx8domIUFcQsjsU9TljjMGISjBFh/view?usp=drive_link", // Razonamiento Verbal 1
            //12: "https://docs.google.com/presentation/d/1mfOCpPI-mQMEQ-W7-AXz8kh4Weto4cU2/edit?usp=drive_link", // Tutoría
            13: "https://drive.google.com/file/d/191RI495O6FG1ztnEP81mUMGVfD8A3pbd/view?usp=drive_link", // Biología
            14: "https://drive.google.com/file/d/10Tj1oF16ppuP1j8AqqNklgT9fuBzPt-L/view?usp=drive_link", // Física
            15: "https://drive.google.com/file/d/13bB_VOLjmyhWVZFw9av_u08dg4qtfUVr/view?usp=drive_link", // Química
            16: "https://drive.google.com/file/d/1yID7DKg_BXRzxMnmd1o8T8e_0VG5ym-G/view?usp=drive_link", // Álgebra
            17: "https://drive.google.com/file/d/15xekPnkkpIHuz5gPLv000ANIAe2_vAe4/view?usp=drive_link", // Aritmética
            18: "https://drive.google.com/file/d/1HD5PkxKB6h8zvNSmwyycNhhSyrm6IST-/view?usp=drive_link", // Geometría
            19: "https://drive.google.com/file/d/1_25GSRvnABzo_NybVC-rhwxz39fa5Qaw/view?usp=drive_link", // Razonamiento Matemático
            20: "https://drive.google.com/file/d/1wJJklLmrkK93Z258H2HBTa4U2jAoOxFM/view?usp=drive_link" // Trigonometría
        }
    },
    "5to": {
        "tomo-i": {
            1: "https://drive.google.com/file/d/1SqAJXgriF3Hz3BvZ8Vczlj0RHqy5ZZCa/view?usp=drive_link",//Economía
            2: "https://drive.google.com/file/d/1DJOhtc9mcNAaCzQXoFR3T5apz1H_Dbsp/view?usp=drive_link", // Geografía
            3: "https://drive.google.com/file/d/1GFewVJejfSJ6qrGCbpMcLNcLdWfUzJog/view?usp=drive_link", // Historia del Perú
            4: "https://drive.google.com/file/d/1FqxlculSbdv5pH-4jKoHQcpLbzwbz5PQ/view?usp=drive_link", // Historia Universal
            5: "https://drive.google.com/file/d/1sJdnSWZhiSuCoaT7Z0PZknCgkQyOHj09/view?usp=drive_link", // psicologia
            7: "https://drive.google.com/file/d/107Y4XfFohaPEP6lHveeSNyHzd_GlIv1W/view?usp=drive_link", // Fortaleciendo mi Fe
            8: "https://drive.google.com/file/d/19jbFTos1lePB76Ta6hylnEoWLBpOsAr7/view?usp=drive_link", // Lenguaje
            9: "https://drive.google.com/file/d/1twRAiub4Iidiol5sU0vxl3FxXR47cski/view?usp=drive_link", // Literatura
            10: "https://drive.google.com/file/d/1nD5TP-XCz1a6cwlLifg2YTuiNMcMWuWe/view?usp=drive_link", // Razonamiento Verbal 1
            21: "https://drive.google.com/file/d/1kKMp0m5i714295RV72aCf7HheN9gfYuV/view?usp=drive_link", // Razonamiento Verbal 2
            //12: "https://docs.google.com/presentation/d/1mfOCpPI-mQMEQ-W7-AXz8kh4Weto4cU2/edit?usp=drive_link", // Tutoría
            13: "https://drive.google.com/file/d/1PJm5nITkLv3Ea-ibz3VGcDAX47kqP5dx/view?usp=drive_link", // Biología
            14: "https://drive.google.com/file/d/1n884VgZRo7WvViSeaTKcpk_3_nli7XgJ/view?usp=drive_link", // Física
            15: "https://drive.google.com/file/d/1qrFoTcGIFUXF1-fonn98Z85jOFo43pwn/view?usp=drive_link", // Química
            16: "https://drive.google.com/file/d/1JWH2-c4EBGRMgEerzZwusH7zMBnmvdfi/view?usp=drive_link", // Álgebra
            17: "https://drive.google.com/file/d/1ox1pvNyDnQPTRX3PUs6IPnig-pRZ3ShC/view?usp=drive_link", // Aritmética
            18: "https://drive.google.com/file/d/1ZjQ8m8YCD11RpMy5VOVLRnjZn7vemhPE/view?usp=drive_link", // Geometría
            19: "https://drive.google.com/file/d/17a9pWG9LZukKT3QoDKEWkbqgDRp8PtwL/view?usp=drive_link", // Razonamiento Matemático
            20: "https://drive.google.com/file/d/1CorUCpMK4nk3G0do8jZD02irD7CA8kth/view?usp=drive_link" // Trigonometría
         },
        "tomo-ii": {
            1: "https://drive.google.com/file/d/1PnVgBBDm84qH2gQ34mv83OIHQrn4ZoKw/view?usp=drive_link",//Economía
            2: "https://drive.google.com/file/d/1-54TsxKmbkDsR27WHQob4qClfT6eHkij/view?usp=drive_link", // Geografía
            3: "https://drive.google.com/file/d/1JKvquNOmMOBchiiJmttYMNeu2_cGOv0N/view?usp=drive_link", // Historia del Perú
            4: "https://drive.google.com/file/d/1tOBfWVV0FSLgHHsrCYe_N_BvWlaAr7Fv/view?usp=drive_link", // Historia Universal
            5: "https://drive.google.com/file/d/1O37FcjUGv1u4f0B2EiEaM6-e6eSCtxpe/view?usp=drive_link", // psicologia
            7: "https://drive.google.com/file/d/180X4m6Vd0n2_1faQLygmgjKwx0UQN7tG/view?usp=drive_link", // Fortaleciendo mi Fe
            8: "https://drive.google.com/file/d/1VP59mxyjD7j5zk4UfbGR-Xt5PWII4uaX/view?usp=drive_link", // Lenguaje
            9: "https://drive.google.com/file/d/1qTcW7ppGeND40ba5JIyVvxDr6bxt393W/view?usp=drive_link", // Literatura
            10: "https://drive.google.com/file/d/1fNBnhoMjm84zowCjOKPUnhiupMq7Or8U/view?usp=drive_link", // Razonamiento Verbal 1
            21: "https://drive.google.com/file/d/1fNBnhoMjm84zowCjOKPUnhiupMq7Or8U/view?usp=drive_link", // Razonamiento Verbal 2
            //12: "https://docs.google.com/presentation/d/1mfOCpPI-mQMEQ-W7-AXz8kh4Weto4cU2/edit?usp=drive_link", // Tutoría
            13: "https://drive.google.com/file/d/1cfuSFmZ9jliQ1wItlX20QWZOW6Axa3ZB/view?usp=drive_link", // Biología
            14: "https://drive.google.com/file/d/1nFbpUg1VINggrpfL0cxOVm2X55IbnFfH/view?usp=drive_link", // Física
            15: "https://drive.google.com/file/d/1BVBNL3Q7ibWKnysqWjmauezSGP6bxqJ-/view?usp=drive_link", // Química
            16: "https://drive.google.com/file/d/1kYOzwNndB4BE335H-G57wigvr3LPlyR3/view?usp=drive_link", // Álgebra
            17: "https://drive.google.com/file/d/1bjH_12LGEIy1G1XH-de5N_EVvkU70yzT/view?usp=drive_link", // Aritmética
            18: "https://drive.google.com/file/d/17JkKln2WpKGtCmwOs23IF7_WFsjyWlkR/view?usp=drive_link", // Geometría
            19: "https://drive.google.com/file/d/1z2NKDfb7AqZEwOWinyD2cgyHoICt59wT/view?usp=drive_link", // Razonamiento Matemático
            20: "https://drive.google.com/file/d/1VfSivTXRZfPm62rs-VPFhxKjm8YdfW0v/view?usp=drive_link" // Trigonometría
        },
        "tomo-iii": {
            1: "https://drive.google.com/file/d/1sNfEODP6jyleMgjuqkEeA49eV3BBe1Lc/view?usp=drive_link",//Economía
            2: "https://drive.google.com/file/d/1yixKur9P1TjuDsMhb0W492OIolaPB7TA/view?usp=drive_link", // Geografía
            3: "https://drive.google.com/file/d/1EYkrKXZ_6dgmbjDjIiYG3aKpTQOwM8n2/view?usp=drive_link", // Historia del Perú
            4: "https://drive.google.com/file/d/1DUQxOb6vlglHxw1ZIXjHv7NkUPD0ZCVb/view?usp=drive_link", // Historia Universal
            5: "https://drive.google.com/file/d/12s4H2VA4TcZgfQhKB6eGUhbTTwzRtGK3/view?usp=drive_link", // psicologia
            7: "https://drive.google.com/file/d/180X4m6Vd0n2_1faQLygmgjKwx0UQN7tG/view?usp=drive_link", // Fortaleciendo mi Fe
            8: "https://drive.google.com/file/d/193JjcxwnJ-SoirC1GaqecCHEJbVfzoA7/view?usp=drive_link", // Lenguaje
            9: "https://drive.google.com/file/d/1tW4W5ohwgXhjDaT6X85NgiwGZ8FmXQGj/view?usp=drive_link", // Literatura
            10: "https://drive.google.com/file/d/1mqd50GeIu5Fo5XaRiKBokwmtdp9HkhPb/view?usp=drive_link", // Razonamiento Verbal 1
            21: "https://drive.google.com/file/d/1mqd50GeIu5Fo5XaRiKBokwmtdp9HkhPb/view?usp=drive_link", // Razonamiento Verbal 2
            //12: "https://docs.google.com/presentation/d/1mfOCpPI-mQMEQ-W7-AXz8kh4Weto4cU2/edit?usp=drive_link", // Tutoría
            13: "https://drive.google.com/file/d/124SteFQnjDoFlk5J_nt1HBca6U0hSGxb/view?usp=drive_link", // Biología
            14: "https://drive.google.com/file/d/1zNFgApsYTaorL5w9UI5VUa6gkiAXEscz/view?usp=drive_link", // Física
            15: "https://drive.google.com/file/d/1ffk4SJa0MGe7qhgZ7YTsrVyuHEGpeAa4/view?usp=drive_link", // Química
            16: "https://drive.google.com/file/d/1_IiJd3hPN8HluQBLiL76XNHtvu0Pb2gI/view?usp=drive_link", // Álgebra
            17: "https://drive.google.com/file/d/1KKjhJLywzZ2zYCVXoHzjQRfSyuXIhOLf/view?usp=drive_link", // Aritmética
            18: "https://drive.google.com/file/d/12RCsPafw9kZr4STiP00CTzqMPtDUUnYi/view?usp=drive_link", // Geometría
            19: "https://drive.google.com/file/d/1qHxzaay97kM8nhUNc_Top5149CHrJfzn/view?usp=drive_link", // Razonamiento Matemático
            20: "https://drive.google.com/file/d/1V7BwW0iG5nfdBVgPqj175FkZkR57Aj7b/view?usp=drive_link" // Trigonometría
        }
    },
    "5topre": {
        "tomo-i": {
            1: "https://drive.google.com/file/d/1DaOkF4O_8t14eKkyq6T0WaNtW-E4T-Mh/view?usp=drive_link",//Economía
            2: "https://drive.google.com/file/d/1cGok55fA1HBUB4m-CMGuRdkQ_t-9BQbj/view?usp=drive_link", // Geografía
            3: "https://drive.google.com/file/d/1zI3_KsI86U1v3i5mNYVoyw8-kvPTKEna/view?usp=drive_link", // Historia del Perú
            4: "https://drive.google.com/file/d/1fTVzlXQN54r1HED7qKCe-84D6mv8U7N_/view?usp=drive_link", // Historia Universal
            5: "https://drive.google.com/file/d/1KVeQ6D03sDxVB_zB-5lAgh9KvKhsiSlr/view?usp=drive_link", // psicologia
            8: "https://drive.google.com/file/d/1U48XiRLJu1kF8d76AE3vW89sHC4y4CCC/view?usp=drive_link", // Lenguaje
            9: "https://drive.google.com/file/d/1yF55XwfdIoUeoV3CsIr4k7K8ohpXClvs/view?usp=drive_link", // Literatura
            10: "https://drive.google.com/file/d/1DWFCiBwF_jHLVgSNdr8YpYQymRH7Lqf8/view?usp=drive_link", // Razonamiento Verbal 1
            13: "https://drive.google.com/file/d/1HkHNufKXd9h0RFTZm0waXvj0IipReZBK/view?usp=drive_link", // Biología
            14: "https://drive.google.com/file/d/1u6_3sTWZZ7olZ5pBUj-7SRGgR9GnwE8r/view?usp=drive_link", // Física
            15: "https://drive.google.com/file/d/16ES7oZ931nKJVQB21p287uFmgkOv2s3X/view?usp=drive_link", // Química
            16: "https://drive.google.com/file/d/1XBOH-FuuGU9-kgVUsiXC6uVH4dSPHr7v/view?usp=drive_link", // Álgebra
            17: "https://drive.google.com/file/d/1cdx5b0d8CwdYOsTAvzAnpThXEROmRjM2/view?usp=drive_link", // Aritmética
            18: "https://drive.google.com/file/d/1VPuoymWlEuB6UtLfLF7PBOPH-ecE3qz-/view?usp=drive_link", // Geometría
            19: "https://drive.google.com/file/d/1ozUG5ji3LTKAdJ6smlHXkIoSEBSB3E1H/view?usp=drive_link", // Razonamiento Matemático
            20: "https://drive.google.com/file/d/1Noh8cqxB5CT61QkVC5kOD50elB9XKKdk/view?usp=drive_link" // Trigonometría
         },
        "tomo-ii": {
            1: "https://drive.google.com/file/d/1m1w-VhBtg1JSWEEqGyV0opvkSoWdKb4e/view?usp=drive_link",//Economía
            2: "https://drive.google.com/file/d/1_YSEdNXR93ikjkP2u5jq884mWMI5o8qO/view?usp=drive_link", // Geografía
            3: "https://drive.google.com/file/d/1d5scKaZSVxF7uHOrYE0CtAKUZs-i0FF3/view?usp=drive_link", // Historia del Perú
            4: "https://drive.google.com/file/d/1uaitvSLzuLglryaBYLQpuYZbqcCh9A0J/view?usp=drive_link", // Historia Universal
            5: "https://drive.google.com/file/d/1943PvA5IsuaMouMo6jjzrnGvPs4gyleo/view?usp=drive_link", // psicologia
            8: "https://drive.google.com/file/d/1vbztZDttPOC_EggmRI4baThr_tHiqRzv/view?usp=drive_link", // Lenguaje
            9: "https://drive.google.com/file/d/1mddLbEyOwZHxaJ7qdlze1fE4qmilW4_i/view?usp=drive_link", // Literatura
            10: "https://drive.google.com/file/d/11MPe6yRDwLOf1L_fIaqroSASNbSAxaDB/view?usp=drive_link", // Razonamiento Verbal 1
            13: "https://drive.google.com/file/d/1nsVhz4A4u-Nkvpf3SE1F2wxsnPlFQWQT/view?usp=drive_link", // Biología
            14: "https://drive.google.com/file/d/1jLzY933z8tHS6L6yIGZelYiu8q70GeVu/view?usp=drive_link", // Física
            15: "https://drive.google.com/file/d/1oQaUZOFrSQFuFWLkh6nFwpMqnHNfF3pW/view?usp=drive_link", // Química
            16: "https://drive.google.com/file/d/1HW4CQwPRK8O4Z4Z4MDDIXugDexxnBgZD/view?usp=drive_link", // Álgebra
            17: "https://drive.google.com/file/d/1tyPWohxmE_AEjMa3S04ESQpHZp3MEbNK/view?usp=drive_link", // Aritmética
            18: "https://drive.google.com/file/d/1_63PuCc-fr08RPLobANsqqSIDq7NHE67/view?usp=drive_link", // Geometría
            19: "https://drive.google.com/file/d/1YCEtw9okGDGR8SNKJSfPXUdOhd5G1NhI/view?usp=drive_link", // Razonamiento Matemático
            20: "https://drive.google.com/file/d/1MynzrdbdPV3anyM9EQPbHx1i6YztDz7K/view?usp=drive_link" // Trigonometría
        },
        "tomo-iii": {
            1: "https://drive.google.com/file/d/1m1w-VhBtg1JSWEEqGyV0opvkSoWdKb4e/view?usp=drive_link",//Economía
            2: "https://drive.google.com/file/d/1_YSEdNXR93ikjkP2u5jq884mWMI5o8qO/view?usp=drive_link", // Geografía
            3: "https://drive.google.com/file/d/1d5scKaZSVxF7uHOrYE0CtAKUZs-i0FF3/view?usp=drive_link", // Historia del Perú
            4: "https://drive.google.com/file/d/1uaitvSLzuLglryaBYLQpuYZbqcCh9A0J/view?usp=drive_link", // Historia Universal
            5: "https://drive.google.com/file/d/1943PvA5IsuaMouMo6jjzrnGvPs4gyleo/view?usp=drive_link", // psicologia
            8: "https://drive.google.com/file/d/1vbztZDttPOC_EggmRI4baThr_tHiqRzv/view?usp=drive_link", // Lenguaje
            9: "https://drive.google.com/file/d/1mddLbEyOwZHxaJ7qdlze1fE4qmilW4_i/view?usp=drive_link", // Literatura
            10: "https://drive.google.com/file/d/11MPe6yRDwLOf1L_fIaqroSASNbSAxaDB/view?usp=drive_link", // Razonamiento Verbal 1
            13: "https://drive.google.com/file/d/1nsVhz4A4u-Nkvpf3SE1F2wxsnPlFQWQT/view?usp=drive_link", // Biología
            14: "https://drive.google.com/file/d/1zNFgApsYTaorL5w9UI5VUa6gkiAXEscz/view?usp=drive_link", // Física
            15: "https://drive.google.com/file/d/1oQaUZOFrSQFuFWLkh6nFwpMqnHNfF3pW/view?usp=drive_link", // Química
            16: "https://drive.google.com/file/d/1HW4CQwPRK8O4Z4Z4MDDIXugDexxnBgZD/view?usp=drive_link", // Álgebra
            17: "https://drive.google.com/file/d/1tyPWohxmE_AEjMa3S04ESQpHZp3MEbNK/view?usp=drive_link", // Aritmética
            18: "https://drive.google.com/file/d/1_63PuCc-fr08RPLobANsqqSIDq7NHE67/view?usp=drive_link", // Geometría
            19: "https://drive.google.com/file/d/1YCEtw9okGDGR8SNKJSfPXUdOhd5G1NhI/view?usp=drive_link", // Razonamiento Matemático
            20: "https://drive.google.com/file/d/1MynzrdbdPV3anyM9EQPbHx1i6YztDz7K/view?usp=drive_link" // Trigonometría
        }
    },
    "5tosm": {
        "tomo-i": {
            1: "https://drive.google.com/file/d/1z5rgrEGumZ1wMqBjRszByelN8fQftgcq/view?usp=drive_link",//Economía
            2: "https://drive.google.com/file/d/1DMddh_GVcLoIA3nsmhRBv6siO0hAbt28/view?usp=drive_link", // Geografía
            3: "https://drive.google.com/file/d/11NR1s6q_IQOAKaCiBgkYuTDvgDAPILeg/view?usp=drive_link", // Historia del Perú
            4: "https://drive.google.com/file/d/1gIv4bMDx4GXdqbYBoSfv7LhJSb9e8haj/view?usp=drive_link", // Historia Universal
            5: "https://drive.google.com/file/d/1UYqrwoS5dokd-MjEXeyv66YADkh81gOB/view?usp=drive_link", // psicologia
            8: "https://drive.google.com/file/d/1p4-J2oRlNHcVTEMvP8u1F8x0pTRwqoxY/view?usp=drive_link", // Lenguaje
            9: "https://drive.google.com/file/d/13LZozU2xFebiqKSeXPUm1bypoXOVu44U/view?usp=drive_link", // Literatura
            10: "https://drive.google.com/file/d/1YpNd5wN67qKE2C1AEnE2NiuStWzSUW8-/view?usp=drive_link", // Razonamiento Verbal 1
            13: "https://drive.google.com/file/d/1kqoZG3sJeP6fa9d0wqzuyW4e6_88CWrq/view?usp=drive_link", // Biología
            14: "https://drive.google.com/file/d/15wBoqx0oQpAE1Rpm0iv4AbEe45PSQxQP/view?usp=drive_link", // Física
            15: "https://drive.google.com/file/d/1AlEdFvNTJ9axXNX4iNPVT-WDJQ_f5MRj/view?usp=drive_link", // Química
            16: "https://drive.google.com/file/d/1T1suczasbOWMcOhasikL3cClvzkHOL_S/view?usp=drive_link", // Álgebra
            17: "https://drive.google.com/file/d/1NkHF8seCAB4GYCnUq6jzoNwQkkvyHHRX/view?usp=drive_link", // Aritmética
            18: "https://drive.google.com/file/d/1IKX6hpfCey1fnQtCK0hqCdpW5pQN9SGP/view?usp=drive_link", // Geometría
            19: "https://drive.google.com/file/d/1YF8BP5XT6hEupP8U79UcmK-MK64GUGHj/view?usp=drive_link", // Razonamiento Matemático
            20: "https://drive.google.com/file/d/1mmujcZoag3yYRfJ1q__ad7gmdqE9afc-/view?usp=drive_link" // Trigonometría
         },
        "tomo-ii": {
            1: "https://drive.google.com/file/d/13x-f3G3UQgfIAR85Rd5vLQ6kN22-mifO/view?usp=drive_link",//Economía
            2: "https://drive.google.com/file/d/1QuNrfliRBKoRHRhc5Xk4XRFL8iWuFSQQ/view?usp=drive_link", // Geografía
            3: "https://drive.google.com/file/d/1Z_5qgriuQK9AM1aIN_741xfcE4MfSrxo/view?usp=drive_link", // Historia del Perú
            4: "https://drive.google.com/file/d/10CoMwoD6bUuY8F51kPkHky3K74pDDP3i/view?usp=drive_link", // Historia Universal
            5: "https://drive.google.com/file/d/12LuBpVqoua7V6J4Gnk-tt4GtP4-xjg7D/view?usp=drive_link", // psicologia
            8: "https://drive.google.com/file/d/1xTAW6DgdLZagKCBNoqSmFanmRh3JvwSv/view?usp=drive_link", // Lenguaje
            9: "https://drive.google.com/file/d/1jcW4LUXndtxTCugfQ3OdMr6sB42Uzybx/view?usp=drive_link", // Literatura
            10: "https://drive.google.com/file/d/1tAnNgYfFjG26u5b_HorU-MMEUoVH9bwL/view?usp=drive_link", // Razonamiento Verbal 1
            13: "https://drive.google.com/file/d/1gHGPIPakl_Yc70m10eAnbT09HDebhLhJ/view?usp=drive_link", // Biología
            14: "https://drive.google.com/file/d/1L5YS9xnhOYQKoVd49BhJJGckEygTPU-o/view?usp=drive_link", // Física
            15: "https://drive.google.com/file/d/1XUv9akn2gMYeQj9sx5G_xdCb0kp4iSQq/view?usp=drive_link", // Química
            16: "https://drive.google.com/file/d/1HUUNnOl8vfnuzMyxOitr02JuwgIyn1VL/view?usp=drive_link", // Álgebra
            17: "https://drive.google.com/file/d/1KmiumukqvOTNVbNYffvhH6DjH7nEvxZk/view?usp=drive_link", // Aritmética
            18: "https://drive.google.com/file/d/1FbqmWwGNJ7NTltSa8MFw2mUjTy5Qb0jL/view?usp=drive_link", // Geometría
            19: "https://drive.google.com/file/d/1bLlyh4SdKJEcM4Z36m03uamrrtRR5VcD/view?usp=drive_link", // Razonamiento Matemático
            20: "https://drive.google.com/file/d/1QlkEzUuTFrucj0l_jeLwEaeXtLReRM9c/view?usp=drive_link" // Trigonometría
        }
    },
    "5touni": {
        "tomo-i": {
            14: "https://drive.google.com/file/d/1m0pb2aVZu7MRntLgSRS17_vaPGZOcMGA/view?usp=drive_link", // Física
            15: "https://drive.google.com/file/d/1Iv6llbrVeH9vRIdy75Vwk4b3H5cIXStK/view?usp=drive_link", // Química
            16: "https://drive.google.com/file/d/1VAemzW-kQK6iel7F3i9Y4B2dYd8JO9vv/view?usp=drive_link", // Álgebra
            17: "https://drive.google.com/file/d/1wDqxN7b51ZfwTjgecTN22pYa4_Nj0G6-/view?usp=drive_link", // Aritmética
            18: "https://drive.google.com/file/d/1arU7fX6_xSpyUA5jzTAinhzxv4We5_E6/view?usp=drive_link", // Geometría
            20: "https://drive.google.com/file/d/1DvG5UloO2iIy-5RU6qwxzW2Re84d3RoT/view?usp=drive_link" // Trigonometría
         },
        "tomo-ii": {
            14: "https://drive.google.com/file/d/1XLXX5Ni3Mgi35sWsJzX5w__Y_chsOFJ7/view?usp=drive_link", // Física
            15: "https://drive.google.com/file/d/1SoHIAxZwskX8qG7A7hILQ4V6U9yjHstf/view?usp=drive_link", // Química
            16: "https://drive.google.com/file/d/1etf2u8ABLZPR-sWHYDTfgwoAp9OkGzEk/view?usp=drive_link", // Álgebra
            17: "https://drive.google.com/file/d/1nVmRob5uGZmb3SQv3c4NY-Zyrsa-IbuR/view?usp=drive_link", // Aritmética
            18: "https://drive.google.com/file/d/1Rw3rC1QkzEQ7YvPFf3lMgwCr0ycn7BUq/view?usp=drive_link", // Geometría
            20: "https://drive.google.com/file/d/1TqJ8WeYRaKR2lC7PrhlrptaX4DuNjDl0/view?usp=drive_link" // Trigonometría
        }
    },

};

// ============================================================
// LISTA DE CURSOS
// ============================================================
const courses = [
    { id: 1, name: "Economía", description: "Sistemas económicos, oferta y demanda, mercado y finanzas.", icon: "fas fa-chart-line", color: "#2d6a4f", area: "sociales" },
    { id: 2, name: "Geografía", description: "Relieve, clima, recursos naturales y cartografía.", icon: "fas fa-globe-americas", color: "#40916c", area: "sociales" },
    { id: 3, name: "Historia del Perú", description: "Culturas preincas, imperio inca, conquista y república.", icon: "fas fa-landmark", color: "#dda15e", area: "sociales" },
    { id: 4, name: "Historia Universal", description: "Edades históricas, guerras mundiales y civilizaciones antiguas.", icon: "fas fa-monument", color: "#bc6c25", area: "sociales" },
    { id: 5, name: "Psicología", description: "Procesos mentales, emociones, desarrollo humano y conducta.", icon: "fas fa-brain", color: "#ff006e", area: "sociales" },
    { id: 6, name: "Valores", description: "Ética, moral, formación ciudadana y convivencia.", icon: "fas fa-heart", color: "#e63946", area: "sociales" },
    { id: 7, name: "Fortaleciendo mi Fe", description: "Formación espiritual y valores cristianos.", icon: "fas fa-church", color: "#9c27b0", area: "comunicacion" },
    { id: 8, name: "Lenguaje", description: "Gramática, comunicación, comprensión lectora y redacción.", icon: "fas fa-spell-check", color: "#3a86ff", area: "comunicacion" },
    { id: 9, name: "Literatura", description: "Géneros literarios, autores, obras y análisis textual.", icon: "fas fa-book-open", color: "#8338ec", area: "comunicacion" },
    { id: 10, name: "Razonamiento Verbal", description: "Sinónimos, antónimos, analogías verbales y comprensión.", icon: "fas fa-comment-alt", color: "#588157", area: "comunicacion" },
    { id: 11, name: "Teatro", description: "Expresión corporal, actuación, obras teatrales y creatividad.", icon: "fas fa-mask", color: "#d62828", area: "comunicacion" },
    { id: 12, name: "Tutoría", description: "Orientación personal, desarrollo de habilidades socioemocionales.", icon: "fas fa-hand-holding-heart", color: "#f4a261", area: "comunicacion" },
    { id: 13, name: "Biología", description: "Células, seres vivos, ecosistemas y anatomía humana.", icon: "fas fa-dna", color: "#2a9d8f", area: "ciencia" },
    { id: 14, name: "Física", description: "Movimiento, fuerzas, energía, ondas y electricidad.", icon: "fas fa-atom", color: "#9d4edd", area: "ciencia" },
    { id: 15, name: "Química", description: "Elementos, compuestos, reacciones y tabla periódica.", icon: "fas fa-flask", color: "#fb5607", area: "ciencia" },
    { id: 16, name: "Álgebra", description: "Expresiones algebraicas, ecuaciones, funciones y polinomios.", icon: "fas fa-square-root-alt", color: "#e63946", area: "matematica" },
    { id: 17, name: "Aritmética", description: "Números, operaciones básicas, fracciones, decimales y más.", icon: "fas fa-calculator", color: "#0a4d8c", area: "matematica" },
    { id: 18, name: "Geometría", description: "Figuras geométricas, medición, propiedades y transformaciones.", icon: "fas fa-draw-polygon", color: "#3a86ff", area: "matematica" },
    { id: 19, name: "Razonamiento Matemático", description: "Problemas lógicos, secuencias, analogías y patrones.", icon: "fas fa-puzzle-piece", color: "#3d405b", area: "matematica" },
    { id: 20, name: "Trigonometría", description: "Triángulos, funciones trigonométricas, identidades y aplicaciones.", icon: "fas fa-shapes", color: "#1d3557", area: "matematica" },
    { id: 21, name: "Razonamiento Verbal 2", description: "Sinónimos, antónimos, analogías verbales y comprensión.", icon: "fas fa-comment-alt", color: "#588157", area: "comunicacion" }
];

const areaNames = {
    sociales: "Ciencias Sociales",
    comunicacion: "Comunicación",
    ciencia: "Ciencia y Tecnología",
    matematica: "Matemática"
};

const grades = [
    { id: "1ro", name: "1ro Secundaria", icon: "fas fa-star" },
    { id: "2do", name: "2do Secundaria", icon: "fas fa-star" },
    { id: "3ro", name: "3ro Secundaria", icon: "fas fa-star" },
    { id: "4to", name: "4to Secundaria", icon: "fas fa-star" },
    { id: "5to", name: "5to Secundaria", icon: "fas fa-star" },
    { id: "5topre", name: "5to Pre", icon: "fas fa-star" },
    { id: "5tosm", name: "5to San Marcos", icon: "fas fa-star" },
    { id: "5touni", name: "5to UNI", icon: "fas fa-star" }
];

const tomos = [
    { id: "tomo-i", name: "Tomo I", icon: "fas fa-book" },
    { id: "tomo-ii", name: "Tomo II", icon: "fas fa-book" },
    { id: "tomo-iii", name: "Tomo III", icon: "fas fa-book" }
    //{ id: "tomo-iv", name: "Tomo IV", icon: "fas fa-book" },
    //{ id: "tomo-v", name: "Tomo V", icon: "fas fa-book" },
    //{ id: "tomo-vi", name: "Tomo VI", icon: "fas fa-book" },
    //{ id: "tomo-vii", name: "Tomo VII", icon: "fas fa-book" },
    //{ id: "tomo-viii", name: "Tomo VIII", icon: "fas fa-book" },
    //{ id: "tomo-ix", name: "Tomo IX", icon: "fas fa-book" }
];

// Estado actual
let currentGrade = null;
let currentTomo = null;

// Elementos DOM
const gradeButtonsContainer = document.getElementById('grade-buttons');
const tomoSelectorDiv = document.getElementById('tomo-selector');
const tomoButtonsContainer = document.getElementById('tomo-buttons');
const coursesContainer = document.getElementById('courses-container');

// Generar botones de grados
function generateGradeButtons() {
    gradeButtonsContainer.innerHTML = '';
    grades.forEach(grade => {
        const btn = document.createElement('button');
        btn.className = `selector-btn ${currentGrade === grade.id ? 'active' : ''}`;
        btn.innerHTML = `<i class="${grade.icon}"></i><span>${grade.name}</span>`;
        btn.addEventListener('click', () => {
            currentGrade = grade.id;
            currentTomo = null;
            generateGradeButtons();
            generateTomoButtons();
            tomoSelectorDiv.style.display = 'block';
            renderCourses();
        });
        gradeButtonsContainer.appendChild(btn);
    });
}

// Generar botones de tomos
function generateTomoButtons() {
    tomoButtonsContainer.innerHTML = '';
    if (!currentGrade) return;
    
    tomos.forEach(tomo => {
        const btn = document.createElement('button');
        btn.className = `tomo-btn ${currentTomo === tomo.id ? 'active' : ''}`;
        btn.innerHTML = `<i class="${tomo.icon}"></i><span>${tomo.name}</span>`;
        btn.addEventListener('click', () => {
            currentTomo = tomo.id;
            generateTomoButtons();
            renderCourses();
        });
        tomoButtonsContainer.appendChild(btn);
    });
}

// Renderizar cursos según grado y tomo seleccionado
function renderCourses() {
    coursesContainer.innerHTML = '';
    
    if (!currentGrade) {
        coursesContainer.innerHTML = '<div class="info-message"><i class="fas fa-arrow-up"></i><p>Selecciona un grado para ver los cursos disponibles.</p></div>';
        return;
    }
    
    if (!currentTomo) {
        coursesContainer.innerHTML = '<div class="info-message"><i class="fas fa-layer-group"></i><p>Selecciona un tomo para ver los materiales.</p></div>';
        return;
    }
    
    const gradeData = driveLinks[currentGrade];
    if (!gradeData) {
        coursesContainer.innerHTML = '<div class="no-results"><i class="fas fa-exclamation-triangle"></i><p>No hay materiales disponibles para este grado.</p></div>';
        return;
    }
    
    const tomoData = gradeData[currentTomo];
    if (!tomoData) {
        coursesContainer.innerHTML = '<div class="no-results"><i class="fas fa-folder-open"></i><p>No hay materiales disponibles para este tomo.</p></div>';
        return;
    }
    
    // Filtrar cursos que tienen enlace en este tomo
    const availableCourses = courses.filter(course => tomoData[course.id] !== undefined);
    
    if (availableCourses.length === 0) {
        coursesContainer.innerHTML = '<div class="no-results"><i class="fas fa-book-open"></i><p>No hay cursos disponibles para este tomo.</p></div>';
        return;
    }
    
    // Mostrar información del grado y tomo actual
    const gradeName = grades.find(g => g.id === currentGrade).name;
    const tomoName = tomos.find(t => t.id === currentTomo).name;
    
    const infoHeader = document.createElement('div');
    infoHeader.className = 'info-message';
    infoHeader.style.background = '#eef2ff';
    infoHeader.style.marginBottom = '1rem';
    infoHeader.style.padding = '0.75rem';
    infoHeader.innerHTML = `<i class="fas fa-info-circle"></i><p><strong>${gradeName}</strong> - <strong>${tomoName}</strong></p>`;
    coursesContainer.appendChild(infoHeader);
    
    // Generar tarjetas para cada curso
    availableCourses.forEach(course => {
        const link = tomoData[course.id];
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
    tomoSelectorDiv.style.display = 'none';
    renderCourses();
});