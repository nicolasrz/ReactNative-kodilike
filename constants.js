const constants = {
  req: {
    ping: '/jsonrpc?request={"jsonrpc":"2.0","method":"JSONRPC.Ping","id":1}',
    our_folders:
      '/jsonrpc?request={"jsonrpc":"2.0","method":"Files.GetSources","params":["video"],"id":41}',
    file_collection_start:
      '/jsonrpc?FileCollection&request={"jsonrpc":"2.0","method":"Files.GetDirectory","id":"1529960051868","params":{"directory":"',
    file_collection_end:
      ',"media":"video","properties":["title","file","mimetype","thumbnail","dateadded"],"sort":{"method":"none","order":"ascending"}}}'
  }
};

export default constants;
