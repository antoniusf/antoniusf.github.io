from http.server import HTTPServer, SimpleHTTPRequestHandler

import ssl
import os
            
server = HTTPServer(("127.0.0.1", 5002), SimpleHTTPRequestHandler)
server.socket = ssl.wrap_socket(server.socket, keyfile="/home/antonius/testing-server.key", certfile="/home/antonius/testing-server.crt", server_side=True)
server.serve_forever()
