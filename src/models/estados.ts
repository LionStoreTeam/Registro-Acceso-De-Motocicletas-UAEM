// Definir una interfaz para los estados y sus municipios
interface Estado {
  [key: string]: string[];
}

const estados: Estado = {
  Morelos: [
    "Amacuzac",
    "Atlatlahucan",
    "Axochiapan",
    "Ayala",
    "Coatlán del Río",
    "Cuautla",
    "Cuernavaca",
    "Emiliano Zapata",
    "Huitzilac",
    "Jantetelco",
    "Jiutepec",
    "JoJutla",
    "Mazatepec",
    "Miacatlán",
    "Ocuituco",
    "Puente de Ixtla",
    "Temixco",
    "Temoac",
    "Tepalcingo",
    "Tepoztlán",
    "Tetecala",
    "Tetela del Volcán",
    "Tlalnepantla",
    "Tlaltizapán de Zapata",
    "Tlaquiltenango",
    "Tlayacapan",
    "Totolapan",
    "Xochitepec",
    "Yautepec",
    "Yecapixtla",
    "Zacatepec",
    "Zacualpan de Amilpas",
  ],
  CDMX: [
    "Álvaro Obregón",
    "Azcapotzalco",
    "Benito Juárez",
    "Coyoacán",
    "Cuajimalpa de Morelos",
    "Cuauhtémoc",
    "Gustavo A. Madero",
    "Iztacalco",
    "Iztapalapa",
    "La Magdalena Contreras",
    "Miguel Hidalgo",
    "Milpa Alta",
    "Tláhuac",
    "Tlalpan",
    "Venustiano Carranza",
    "Xochimilco",
  ],
  // Agrega los municipios para los otros estados aquí
};

export default estados;
