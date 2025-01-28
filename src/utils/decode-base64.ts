/**
 *  Decodifica un string Base64 y crea un objeto `File`.
 *
 * @param data - String codificada en Base64.
 * @param filename - Nombre deseado para el output del archivo.
 * @returns - Un objeto `File` que representa los datos decodificados.
 */

export function decodeBase64(data: string, filename: string) {
    const bytes = atob(data);
    const buffer = new ArrayBuffer(bytes.length);
    const uint = new Uint8Array(buffer);

    for (let i = 0; i < bytes.length; i++) {
        uint[i] = bytes.charCodeAt(i);
    }

    const blob = new Blob([uint], { type: "image/jpeg" });
    return new File([blob], `${filename}`, {
        type: "image/jpeg",
    });
}
