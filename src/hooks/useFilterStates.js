import { useState } from 'react';

export const brStates = [
  { 'AC': 'Acre' },
  { 'AL': 'Alagoas' },
  { 'AP': 'Amapá' },
  { 'AM': 'Amazonas' },
  { 'BA': 'Bahia' },
  { 'CE': 'Ceará' },
  { 'DF': 'Distrito Federal' },
  { 'ES': 'Espírito Santo' },
  { 'GO': 'Goías' },
  { 'MA': 'Maranhão' },
  { 'MT': 'Mato Grosso' },
  { 'MS': 'Mato Grosso do Sul' },
  { 'MG': 'Minas Gerais' },
  { 'PA': 'Pará' },
  { 'PB': 'Paraíba' },
  { 'PR': 'Paraná' },
  { 'PE': 'Pernambuco' },
  { 'PI': 'Piauí' },
  { 'RJ': 'Rio de Janeiro' },
  { 'RN': 'Rio Grande do Norte' },
  { 'RS': 'Rio Grande do Sul' },
  { 'RO': 'Rondônia' },
  { 'RR': 'Roraíma' },
  { 'SC': 'Santa Catarina' },
  { 'SP': 'São Paulo' },
  { 'SE': 'Sergipe' },
  { 'TO': 'Tocantins' },
];

export default function useFilterStates() {
  const [selectedStates, setSelectedStates] = useState([]);
  
  const getStateLabel = (key) => {
    const state = brStates.filter(item => {
      return Object.keys(item).join() === key
    })[0]
    return state[Object.keys(state).join()]
  }

  return [selectedStates, setSelectedStates, brStates, getStateLabel];
}