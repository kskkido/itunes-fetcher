import React from 'react';
import useField from 'hooks/useField';
import InputTextSearch from 'components/Shared/Inputs/InputTextSearch';
const TextField = ({ name, ...rest }) => {
    const { value, setValue } = useField(name);
    return (React.createElement(InputTextSearch, Object.assign({}, rest, { value: value, onChangeText: setValue })));
};
export default TextField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL2NvbXBvbmVudHMvU2hhcmVkL0ZpZWxkcy9TZWFyY2hGaWVsZC9pbmRleC50c3giLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBRzFCLE9BQU8sUUFBUSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sZUFBeUMsTUFBTSwwQ0FBMEMsQ0FBQztBQVNqRyxNQUFNLFNBQVMsR0FBOEIsQ0FBQyxFQUM1QyxJQUFJLEVBQ0osR0FBRyxJQUFJLEVBQ1IsRUFBRSxFQUFFO0lBQ0gsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxRQUFRLENBQWEsSUFBSSxDQUFDLENBQUM7SUFFdkQsT0FBTyxDQUNMLG9CQUFDLGVBQWUsb0JBQ1YsSUFBSSxJQUNSLEtBQUssRUFBRSxLQUFLLEVBQ1osWUFBWSxFQUFFLFFBQVEsSUFDdEIsQ0FDSCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsZUFBZSxTQUFTLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL2NvbXBvbmVudHMvU2hhcmVkL0ZpZWxkcy9TZWFyY2hGaWVsZC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE9taXQgfSBmcm9tICd0eXBlcy91dGlsaXR5JztcbmltcG9ydCB7IEZpZWxkVmFsdWUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB1c2VGaWVsZCBmcm9tICdob29rcy91c2VGaWVsZCc7XG5pbXBvcnQgSW5wdXRUZXh0U2VhcmNoLCB7IElucHV0VGV4dFNlYXJjaFByb3BzIH0gZnJvbSAnY29tcG9uZW50cy9TaGFyZWQvSW5wdXRzL0lucHV0VGV4dFNlYXJjaCc7XG5cbnR5cGUgVGV4dEZpZWxkUHJvcHMgPSAoXG4gIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gIH0gJlxuICBPbWl0PElucHV0VGV4dFNlYXJjaFByb3BzLCAndmFsdWUnIHwgJ29uQ2hhbmdlVGV4dCc+XG4pO1xuXG5jb25zdCBUZXh0RmllbGQ6IFJlYWN0LlNGQzxUZXh0RmllbGRQcm9wcz4gPSAoe1xuICBuYW1lLFxuICAuLi5yZXN0XG59KSA9PiB7XG4gIGNvbnN0IHsgdmFsdWUsIHNldFZhbHVlIH0gPSB1c2VGaWVsZDxGaWVsZFZhbHVlPihuYW1lKTtcblxuICByZXR1cm4gKFxuICAgIDxJbnB1dFRleHRTZWFyY2hcbiAgICAgIHsuLi5yZXN0fVxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgb25DaGFuZ2VUZXh0PXtzZXRWYWx1ZX1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dEZpZWxkO1xuIl0sInZlcnNpb24iOjN9