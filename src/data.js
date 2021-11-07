import { v4 as uuidv4 } from 'uuid';

function chillHop() {
  return [
    {
      name: 'Perfect Storm',
      artist: 'Aviino',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg',
      id: uuidv4(),
      active: true,
      color: ['#463430', '#B97E5C'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=23057',
    },
    {
      name: 'I Main Samus Now',
      artist: 'Sleepy Fish',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/09/2ce75252f5419a45d76bb93424ac1eae3e688b17-1024x1024.jpg',
      id: uuidv4(),
      active: false,
      color: ['#204684', '#63A1C8'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=24822',
    },
    {
      name: 'Conflicted',
      artist: 'Hanz',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-1024x1024.jpg',
      id: uuidv4(),
      active: false,
      color: ['#AB787E', '#966C76'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=24642',
    },
    {
      name: 'Glaciar',
      artist: 'Juan Rios, chief.',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/07/4163ebb931e06d4ee8eb184295c0246d4a5055f7-1024x1024.jpg',
      id: uuidv4(),
      active: false,
      color: ['#3E1B3A', '#6A4A7B'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=21648',
    },
  ];
}

export default chillHop;
