export class Proveedor {
    rfc:string;
    razonSocial:string;
    nombreContacto:string;
    calle:string;
    noInt:number;
    noExt:number;
    colonia:string;
    localidadDelegacion:string;
    entidad:string;
    municipio:string;
    pais:string;
    codigoPostal:number;
    correoElectronico:string;
    telefono:number;
    estatus:string;

    public toString = () :string => {
        return `
            Proveedor[
            {rfc: ${this.rfc}},
            {razonSocial: ${this.razonSocial}},
            {nombreContacto: ${this.nombreContacto}},
            {calle: ${this.calle}},
            {noInt: ${this.noInt}},
            {noExt: ${this.noExt}},
            {colonia: ${this.colonia}},
            {localidadDelegacion: ${this.localidadDelegacion}},
            {entidad: ${this.entidad}},
            {municipio: ${this.municipio}},
            {pais: ${this.pais}},
            {codigoPostal: ${this.codigoPostal}},
            {correoElectronico: ${this.correoElectronico}},
            {telefono: ${this.telefono}},
            {estatus: ${this.estatus}},
            ]`
    }
}
