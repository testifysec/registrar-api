package registrar

import (
	_ "github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway"
	_ "github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2"
	_ "google.golang.org/grpc/cmd/protoc-gen-go-grpc"
	_ "google.golang.org/protobuf/cmd/protoc-gen-go"
)

//$ PB_REL="https://github.com/protocolbuffers/protobuf/releases"
//$ curl -LO $PB_REL/download/v3.15.8/protoc-3.15.8-linux-x86_64.zip
// cd ../  && git clone git@github.com:googleapis/googleapis.git

//go:generate sh -c "protoc -I . --grpc-gateway_out . --grpc-gateway_opt logtostderr=true --openapiv2_out ./openapiv2 --grpc-gateway_opt paths=source_relative --grpc-gateway_opt generate_unbound_methods=true --grpc-gateway-ts_out=ts_import_roots=$(pwd),ts_import_root_aliases=base:../../../ts --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative *.proto"
