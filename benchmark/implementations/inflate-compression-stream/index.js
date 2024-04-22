/**
 * Created by nicolas.looschen@pikobytes.de on 22.04.2024.
 *
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE.txt', which is part of this source code package.
 */



async function inflate(buffer){
    const decompressionStream = new DecompressionStream("deflate");
    const decompressedStream = await new Response(buffer)
        .body.pipeThrough(decompressionStream);

    return new Response(decompressedStream).arrayBuffer();
}

exports.run = (data) => {
    // Compression levels not supported. Use unknown defaults always
    return inflate(data.deflateTyped);
};

exports.async = true;
