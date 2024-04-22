/**
 * Created by nicolas.looschen@pikobytes.de on 22.04.2024.
 *
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE.txt', which is part of this source code package.
 */

async function deflate(buffer){
    const compressionStream = new CompressionStream('deflate');
    const compressedStream = await new Response(buffer)
        .body.pipeThrough(compressionStream);

    return new Response(compressedStream).arrayBuffer();
}

exports.run = (data) => {
    // Compression levels not supported. Use unknown defaults always
    return deflate(data.buffer);
};

exports.async = true;