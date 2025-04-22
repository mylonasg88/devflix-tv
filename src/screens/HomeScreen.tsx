import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { useQuery } from '@tanstack/react-query';

import Rail from '../components/organisms/Rail/Rail';

const fetchShows = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  return [
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
    {
      userId: 1,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
    },
    {
      userId: 1,
      id: 4,
      title: 'eum et est occaecati',
      body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
    },
    {
      userId: 1,
      id: 5,
      title: 'nesciunt quas odio',
      body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
    },
    {
      userId: 1,
      id: 6,
      title: 'dolorem eum magni eos aperiam quia',
      body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae',
    },
  ];
  // return res.json();
};

export default function HomeScreen() {
  const { data, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchShows,
  });

  if (isLoading)
    return (
      <View className="text-center">
        <Text>Loading...</Text>
      </View>
    );

  return (
    <View className="p-4 bg-green-100 flex-grow">
      <Text>Home Screen</Text>
      {data?.map((show: any) => (
        <Card key={show.id} style={{ marginBottom: 16 }}>
          <Card.Title title={show.title} />
        </Card>
      ))}
    </View>
  );
}
