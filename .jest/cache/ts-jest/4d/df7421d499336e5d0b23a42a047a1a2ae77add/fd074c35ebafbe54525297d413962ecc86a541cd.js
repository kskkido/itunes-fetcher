import styles from './styles';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Line from './Line';
const DividerHorizontal = ({ hidden = false, margin = 10, }) => (React.createElement(View, { style: StyleSheet.flatten([{ marginTop: margin, marginBottom: margin }, styles.base]) }, !hidden && React.createElement(Line, null)));
export default DividerHorizontal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL2NvbXBvbmVudHMvU2hhcmVkL0RpdmlkZXJIb3Jpem9udGFsL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxVQUFVLENBQUM7QUFDOUIsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sSUFBSSxNQUFNLFFBQVEsQ0FBQztBQU8xQixNQUFNLGlCQUFpQixHQUFzQyxDQUFDLEVBQzVELE1BQU0sR0FBRyxLQUFLLEVBQ2QsTUFBTSxHQUFHLEVBQUUsR0FDWixFQUFFLEVBQUUsQ0FBQyxDQUNKLG9CQUFDLElBQUksSUFBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQ3hGLENBQUMsTUFBTSxJQUFJLG9CQUFDLElBQUksT0FBRyxDQUNmLENBQ1IsQ0FBQztBQUVGLGVBQWUsaUJBQWlCLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL2tlaXN1a2VraWRvL3Byb2plY3RzL2l0dW5lc0ZldGNoZXIvc3JjL2NvbXBvbmVudHMvU2hhcmVkL0RpdmlkZXJIb3Jpem9udGFsL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWV3LCBTdHlsZVNoZWV0IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCBMaW5lIGZyb20gJy4vTGluZSc7XG5cbnR5cGUgRGl2aWRlckhvcml6b250YWxQcm9wcyA9IHtcbiAgaGlkZGVuPzogYm9vbGVhbjtcbiAgbWFyZ2luPzogbnVtYmVyO1xufTtcblxuY29uc3QgRGl2aWRlckhvcml6b250YWw6IFJlYWN0LlNGQzxEaXZpZGVySG9yaXpvbnRhbFByb3BzPiA9ICh7XG4gIGhpZGRlbiA9IGZhbHNlLFxuICBtYXJnaW4gPSAxMCxcbn0pID0+IChcbiAgPFZpZXcgc3R5bGU9e1N0eWxlU2hlZXQuZmxhdHRlbihbeyBtYXJnaW5Ub3A6IG1hcmdpbiwgbWFyZ2luQm90dG9tOiBtYXJnaW4gfSwgc3R5bGVzLmJhc2VdKX0+XG4gICAgeyFoaWRkZW4gJiYgPExpbmUgLz59XG4gIDwvVmlldz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERpdmlkZXJIb3Jpem9udGFsO1xuIl0sInZlcnNpb24iOjN9