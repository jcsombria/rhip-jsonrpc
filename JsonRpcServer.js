/**
 * JSON-RPC Server
 * author: Jesús Chacón <jcsombria@gmail.com>
 *
 * Copyright (C) 2013 Jesús Chacón
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function JsonRpcServer() {}

JsonRpcServer.prototype.parse = function(jsonrpc) {
	var methodCall = JSON.parse(jsonrpc);
	var isBatchMode = (methodCall instanceof Array);
	var result;
	if(isBatchMode) {
		result = [];
		for(var currentRequest=0, currentResponse=0, len=methodCall.length; currentRequest<len; currentRequest++) {
			result[currentResponse] = this.process(methodCall[currentRequest]);
			var isEmpty = result[currentRequest]
			if(!isEmpty) currentRequest++;
		}	
	} else {
		result = this.process(methodCall);
	}
	return result;
}

JsonRpcServer.prototype.process = function(request) {
	var method = this[request.method];
	var result;
	if(method) {
		var len = (request.params instanceof Array) ? request.params.length : 1;
		var nparams = request.params ? len : 0;
		if(nparams != method.nparams && !len)
			return this.responseWithError(request.id, -32602, 'Invalid params');
		result = method.handler(request.params);
		if(request.id !== undefined)
			return this.response(result, request.id);
		else
		return this.response(result);
	} else {
		return this.responseWithError(request.id, -32601, 'Method not found');
	}
	return result;
};

JsonRpcServer.prototype.on = function(method, nparams, handler) {		
	this[method] = {nparams: nparams, handler: handler};
};

JsonRpcServer.prototype.responseWithError = function(id, code, message, data) {
	return {
		jsonrpc: '2.0',
		error: {
			code: code,
			message: message,
			data: data
		},
		id: id
	};
};

JsonRpcServer.prototype.response = function(result, id) {
	var response = {jsonrpc: '2.0',	result: result};
	if(id!==undefined) response.id = id;
	return response;
}

module.exports = JsonRpcServer;
