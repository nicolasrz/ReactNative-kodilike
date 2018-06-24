const constants = {
    req: {
        ping: "/jsonrpc?request={\"jsonrpc\":\"2.0\",\"method\":\"JSONRPC.Ping\",\"id\":1}",
        our_folders: "/jsonrpc?request=[/jsonrpc?request=[{\"jsonrpc\":\"2.0\",\"method\":\"Files.GetSources\",\"params\":[\"video\"],\"id\":41}]]"
    }
}

export default constants;