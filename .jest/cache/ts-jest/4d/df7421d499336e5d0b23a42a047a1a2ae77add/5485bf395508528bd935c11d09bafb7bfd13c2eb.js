import { partial } from 'ramda';
import useForm from './useForm';
const useField = (name) => {
    const { values, setValue } = useForm();
    return {
        value: values[name],
        setValue: partial(setValue, [name]),
    };
};
export default useField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL2hvb2tzL3VzZUZpZWxkLnRzIiwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDaEMsT0FBTyxPQUFPLE1BQU0sV0FBVyxDQUFDO0FBT2hDLE1BQU0sUUFBUSxHQUFHLENBQVUsSUFBWSxFQUFzQixFQUFFO0lBQzdELE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsT0FBTyxFQUFFLENBQUM7SUFFdkMsT0FBTztRQUNMLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ25CLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDcEMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLGVBQWUsUUFBUSxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZWlzdWtla2lkby9wcm9qZWN0cy9pdHVuZXNGZXRjaGVyL3NyYy9ob29rcy91c2VGaWVsZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJ0aWFsIH0gZnJvbSAncmFtZGEnO1xuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi91c2VGb3JtJztcblxudHlwZSBVc2VGaWVsZFBheWxvYWQ8Vj4gPSB7XG4gIHZhbHVlOiBWO1xuICBzZXRWYWx1ZTogKHZhbHVlOiBWKSA9PiB2b2lkO1xufTtcblxuY29uc3QgdXNlRmllbGQgPSA8ViA9IGFueT4obmFtZTogc3RyaW5nKTogVXNlRmllbGRQYXlsb2FkPFY+ID0+IHtcbiAgY29uc3QgeyB2YWx1ZXMsIHNldFZhbHVlIH0gPSB1c2VGb3JtKCk7XG5cbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogdmFsdWVzW25hbWVdLFxuICAgIHNldFZhbHVlOiBwYXJ0aWFsKHNldFZhbHVlLCBbbmFtZV0pLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlRmllbGQ7XG4iXSwidmVyc2lvbiI6M30=