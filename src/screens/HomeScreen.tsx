import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }: any) => {
  const userStats = {
    streak: 7,
    xp: 1250,
    level: 5,
    lessonsCompleted: 23,
  };

  const recentLessons = [
    { id: 1, title: 'Temel Ekonomi', progress: 80, icon: 'trending-up' },
    { id: 2, title: 'Bütçe Yönetimi', progress: 60, icon: 'wallet' },
    { id: 3, title: 'Yatırım Stratejileri', progress: 40, icon: 'analytics' },
  ];

  const quickActions = [
    { title: 'Günlük Görev', icon: 'star', color: '#FFD700' },
    { title: 'Quiz', icon: 'help-circle', color: '#FF6B6B' },
    { title: 'Pratik', icon: 'play-circle', color: '#4ECDC4' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Merhaba! 👋</Text>
            <Text style={styles.subtitle}>Bugün ne öğrenmek istiyorsun?</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Ionicons name="person-circle" size={40} color="#4CAF50" />
          </TouchableOpacity>
        </View>

        {/* Stats Card */}
        <LinearGradient
          colors={['#4CAF50', '#45A049']}
          style={styles.statsCard}
        >
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{userStats.streak}</Text>
              <Text style={styles.statLabel}>Gün</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{userStats.xp}</Text>
              <Text style={styles.statLabel}>XP</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{userStats.level}</Text>
              <Text style={styles.statLabel}>Seviye</Text>
            </View>
          </View>
        </LinearGradient>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hızlı Erişim</Text>
          <View style={styles.quickActionsGrid}>
            {quickActions.map((action, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.quickActionButton, { backgroundColor: action.color }]}
              >
                <Ionicons name={action.icon as any} size={24} color="white" />
                <Text style={styles.quickActionText}>{action.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Lessons */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Son Dersler</Text>
          {recentLessons.map((lesson) => (
            <TouchableOpacity
              key={lesson.id}
              style={styles.lessonCard}
              onPress={() => navigation.navigate('LessonDetail', { lessonId: lesson.id })}
            >
              <View style={styles.lessonInfo}>
                <Ionicons name={lesson.icon as any} size={24} color="#4CAF50" />
                <View style={styles.lessonText}>
                  <Text style={styles.lessonTitle}>{lesson.title}</Text>
                  <Text style={styles.lessonProgress}>{lesson.progress}% tamamlandı</Text>
                </View>
              </View>
              <View style={styles.progressBar}>
                <View
                  style={[styles.progressFill, { width: `${lesson.progress}%` }]}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Continue Learning */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('Dersler')}
        >
          <LinearGradient
            colors={['#4CAF50', '#45A049']}
            style={styles.continueGradient}
          >
            <Text style={styles.continueButtonText}>Öğrenmeye Devam Et</Text>
            <Ionicons name="arrow-forward" size={20} color="white" />
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  profileButton: {
    padding: 5,
  },
  statsCard: {
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 15,
    padding: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  statLabel: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  section: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickActionButton: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  quickActionText: {
    color: 'white',
    fontWeight: '600',
    marginTop: 8,
  },
  lessonCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lessonInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  lessonText: {
    marginLeft: 15,
    flex: 1,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  lessonProgress: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 3,
  },
  continueButton: {
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
  continueGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default HomeScreen;
