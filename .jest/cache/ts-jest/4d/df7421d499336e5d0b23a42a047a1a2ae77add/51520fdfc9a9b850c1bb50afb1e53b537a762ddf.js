import * as parsers from './parsers';
export const createRequest = (parser) => ((url, options) => (fetch(url, options)
    .then(parsers.parseValidStatus)
    .then(parsers.safeParser(parser))));
export const requestText = createRequest(parsers.parseText);
export const requestJSON = createRequest(parsers.parseJSON);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL3V0aWxzL3JlcXVlc3QvZmV0Y2gvaW5kZXgudHMiLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxLQUFLLE9BQU8sTUFBTSxXQUFXLENBQUM7QUFFckMsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQVMsTUFBOEIsRUFBMEIsRUFBRSxDQUFDLENBQy9GLENBQUMsR0FBVyxFQUFFLE9BQXFCLEVBQUUsRUFBRSxDQUFDLENBQ3RDLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDO0tBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7S0FDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDcEMsQ0FDRixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDNUQsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL3V0aWxzL3JlcXVlc3QvZmV0Y2gvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJ3R5cGVzL3JlcXVlc3QnO1xuaW1wb3J0ICogYXMgcGFyc2VycyBmcm9tICcuL3BhcnNlcnMnO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmVxdWVzdCA9IDxSZXN1bHQ+KHBhcnNlcjogcGFyc2Vycy5QYXJzZXI8UmVzdWx0Pik6IFJlcXVlc3Q8UmVzdWx0IHwgbnVsbD4gPT4gKFxuICAodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBSZXF1ZXN0SW5pdCkgPT4gKFxuICAgIGZldGNoKHVybCwgb3B0aW9ucylcbiAgICAgIC50aGVuKHBhcnNlcnMucGFyc2VWYWxpZFN0YXR1cylcbiAgICAgIC50aGVuKHBhcnNlcnMuc2FmZVBhcnNlcihwYXJzZXIpKVxuICApXG4pO1xuXG5leHBvcnQgY29uc3QgcmVxdWVzdFRleHQgPSBjcmVhdGVSZXF1ZXN0KHBhcnNlcnMucGFyc2VUZXh0KTtcbmV4cG9ydCBjb25zdCByZXF1ZXN0SlNPTiA9IGNyZWF0ZVJlcXVlc3QocGFyc2Vycy5wYXJzZUpTT04pO1xuIl0sInZlcnNpb24iOjN9