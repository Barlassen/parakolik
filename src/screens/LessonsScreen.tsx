import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const LessonsScreen = ({ navigation }: any) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tümü', icon: 'grid' },
    { id: 'basics', name: 'Temeller', icon: 'school' },
    { id: 'budget', name: 'Bütçe', icon: 'wallet' },
    { id: 'investment', name: 'Yatırım', icon: 'trending-up' },
    { id: 'savings', name: 'Tasarruf', icon: 'save' },
  ];

  const lessons = [
    {
      id: 1,
      title: 'Ekonomi Nedir?',
      description: 'Ekonomi biliminin temel kavramları ve prensipleri',
      category: 'basics',
      difficulty: 'Başlangıç',
      duration: '15 dk',
      progress: 0,
      xpReward: 50,
      isLocked: false,
    },
    {
      id: 2,
      title: 'Arz ve Talep',
      description: 'Piyasa dinamiklerini anlama',
      category: 'basics',
      difficulty: 'Başlangıç',
      duration: '20 dk',
      progress: 0,
      xpReward: 75,
      isLocked: false,
    },
    {
      id: 3,
      title: 'Bütçe Planlaması',
      description: 'Kişisel bütçe oluşturma ve yönetimi',
      category: 'budget',
      difficulty: 'Orta',
      duration: '25 dk',
      progress: 0,
      xpReward: 100,
      isLocked: false,
    },
    {
      id: 4,
      title: 'Gelir ve Gider Analizi',
      description: 'Finansal durumunuzu analiz etme',
      category: 'budget',
      difficulty: 'Orta',
      duration: '30 dk',
      progress: 0,
      xpReward: 100,
      isLocked: true,
    },
    {
      id: 5,
      title: 'Hisse Senedi Temelleri',
      description: 'Borsa ve hisse senedi yatırımları',
      category: 'investment',
      difficulty: 'İleri',
      duration: '35 dk',
      progress: 0,
      xpReward: 150,
      isLocked: true,
    },
    {
      id: 6,
      title: 'Tasarruf Stratejileri',
      description: 'Para biriktirme yöntemleri',
      category: 'savings',
      difficulty: 'Başlangıç',
      duration: '20 dk',
      progress: 0,
      xpReward: 75,
      isLocked: false,
    },
  ];

  const filteredLessons = selectedCategory === 'all' 
    ? lessons 
    : lessons.filter(lesson => lesson.category === selectedCategory);

  const renderLessonCard = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={[styles.lessonCard, item.isLocked && styles.lockedCard]}
      onPress={() => !item.isLocked && navigation.navigate('LessonDetail', { lessonId: item.id })}
      disabled={item.isLocked}
    >
      <View style={styles.lessonHeader}>
        <View style={styles.lessonTitleContainer}>
          <Text style={[styles.lessonTitle, item.isLocked && styles.lockedText]}>
            {item.title}
          </Text>
          <Text style={[styles.lessonDescription, item.isLocked && styles.lockedText]}>
            {item.description}
          </Text>
        </View>
        {item.isLocked ? (
          <Ionicons name="lock-closed" size={24} color="#999" />
        ) : (
          <View style={styles.lessonStats}>
            <View style={styles.statBadge}>
              <Text style={styles.statText}>{item.difficulty}</Text>
            </View>
            <View style={styles.statBadge}>
              <Text style={styles.statText}>{item.duration}</Text>
            </View>
          </View>
        )}
      </View>
      
      <View style={styles.lessonFooter}>
        <View style={styles.xpContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.xpText}>{item.xpReward} XP</Text>
        </View>
        {!item.isLocked && (
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => navigation.navigate('LessonDetail', { lessonId: item.id })}
          >
            <LinearGradient
              colors={['#4CAF50', '#45A049']}
              style={styles.startButtonGradient}
            >
              <Text style={styles.startButtonText}>Başla</Text>
              <Ionicons name="play" size={16} color="white" />
            </LinearGradient>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dersler</Text>
        <Text style={styles.headerSubtitle}>Ekonomi ve finans öğrenmeye başla</Text>
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryButton,
                selectedCategory === category.id && styles.selectedCategory,
              ]}
              onPress={() => setSelectedCategory(category.id)}
            >
              <Ionicons
                name={category.icon as any}
                size={20}
                color={selectedCategory === category.id ? 'white' : '#4CAF50'}
              />
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category.id && styles.selectedCategoryText,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Lessons List */}
      <FlatList
        data={filteredLessons}
        renderItem={renderLessonCard}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.lessonsList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  categoriesContainer: {
    backgroundColor: 'white',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 8,
    borderRadius: 25,
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  selectedCategory: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  categoryText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  selectedCategoryText: {
    color: 'white',
  },
  lessonsList: {
    padding: 20,
  },
  lessonCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lockedCard: {
    opacity: 0.6,
  },
  lessonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  lessonTitleContainer: {
    flex: 1,
    marginRight: 15,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  lessonDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  lockedText: {
    color: '#999',
  },
  lessonStats: {
    alignItems: 'flex-end',
  },
  statBadge: {
    backgroundColor: '#E8F5E8',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 5,
  },
  statText: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: '600',
  },
  lessonFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  xpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  xpText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#FFD700',
    fontWeight: '600',
  },
  startButton: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  startButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  startButtonText: {
    color: 'white',
    fontWeight: '600',
    marginRight: 8,
  },
});

export default LessonsScreen;
