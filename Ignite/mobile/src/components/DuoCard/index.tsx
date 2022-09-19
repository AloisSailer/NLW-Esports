import { TouchableOpacity, View } from 'react-native';
import { } from '@expo/vector-icons';

import { Duoinfo } from '../Duoinfo';

import { styles } from './styles';
import { THEME } from '../../theme';

export interface DuoCardProps {
  id: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props {
  data: DuoCardProps;
}

export function DuoCard({ data }: Props) {
  return (
    <View style={styles.container}>
      <Duoinfo 
        label="Nome"
        value={data.name}
      />

      <Duoinfo 
        label="Tempo de jogo"
        value={`${data.yearsPlaying} anos`}
      />

      <Duoinfo 
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />

      <Duoinfo 
        label="Chamada de áudio"
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity
      style={styles.button}
      >

      </TouchableOpacity>

    </View>
  );
}