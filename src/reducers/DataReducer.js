import VolumenCompraData from '../components/data/VolumenCompra.json'
import FrecuenciaVisitaData from '../components/data/FrecuenciaVisita.json'
import CompraCigarrilloData from '../components/data/CompraCigarrillo.json'
import ClienteOCALData from '../components/data/ClienteOCAL.json'
import TipoComercioData from '../components/data/TipoComercio.json'
import MarcaCigarrilloData from '../components/data/MarcaCigarrillo.json'
import VarianteCigarrilloData from '../components/data/VarianteCigarrillo.json'
import FormatoCigarrilloData from '../components/data/FormatoCigarrillo.json'
import PotencialImagenData from '../components/data/PotencialImagen.json'
import MaterialesExhibicionData from '../components/data/MaterialesExhibicion.json'
import IncidenciaOtrasMarcasData from '../components/data/IncidenciaOtrasMarcas.json'
import DepartamentosData from '../components/data/Departamentos.json'
export default (state = null) => {
    return {
        VolumenCompraData,
        FrecuenciaVisitaData,
        CompraCigarrilloData,
        ClienteOCALData,
        TipoComercioData,
        MarcaCigarrilloData,
        VarianteCigarrilloData,
        FormatoCigarrilloData,
        PotencialImagenData,
        MaterialesExhibicionData,
        IncidenciaOtrasMarcasData,
        DepartamentosData
    }
}