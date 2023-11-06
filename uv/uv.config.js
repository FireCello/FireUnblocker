self.__uv$config = {
    prefix: '/FireUnblocker/service/',
    bare: '/FireUnblocker/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/FireUnblocker/uv/uv.handler.js',
    bundle: '/FireUnblocker/uv/uv.bundle.js',
    config: '/FireUnblocker/uv/uv.config.js',
    sw: '/FireUnblocker/uv/uv.sw.js',
};
