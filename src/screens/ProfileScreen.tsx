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

const ProfileScreen = ({ navigation }: any) => {
  const userProfile = {
    name: 'Meric',
    email: 'meric@example.com',
    avatar: null,
    level: 5,
    xp: 1250,
    totalXP: 2000,
    streak: 7,
    lessonsCompleted: 23,
    achievements: 8,
    rank: 'Bronz',
  };

  const achievements = [
    { id: 1, title: 'İlk Ders', description: 'İlk dersini tamamladın', icon: 'star', unlocked: true },
    { id: 2, title: '7 Günlük Seri', description: '7 gün üst üste çalıştın', icon: 'flame', unlocked: true },
    { id: 3, title: 'Hızlı Öğrenci', description: '5 dersi 1 günde tamamladın', icon: 'rocket', unlocked: true },
    { id: 4, title: 'Mükemmeliyetçi', description: 'Bir dersi %100 doğrulukla tamamladın', icon: 'trophy', unlocked: false },
  ];

  const menuItems = [
    { id: 1, title: 'Ayarlar', icon: 'settings-outline', action: 'settings' },
    { id: 2, title: 'Bildirimler', icon: 'notifications-outline', action: 'notifications' },
    { id: 3, title: 'Yardım & Destek', icon: 'help-circle-outline', action: 'help' },
    { id: 4, title: 'Gizlilik Politikası', icon: 'shield-outline', action: 'privacy' },
    { id: 5, title: 'Hakkında', icon: 'information-circle-outline', action: 'about' },
    { id: 6, title: 'Çıkış Yap', icon: 'log-out-outline', action: 'logout', color: '#FF6B6B' },
  ];

  const handleMenuAction = (action: string) => {
    switch (action) {
      case 'settings':
        // Navigate to settings
        break;
      case 'notifications':
        // Navigate to notifications
        break;
      case 'help':
        // Navigate to help
        break;
      case 'privacy':
        // Navigate to privacy
        break;
      case 'about':
        // Navigate to about
        break;
      case 'logout':
        // Handle logout
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <LinearGradient
          colors={['#4CAF50', '#45A049']}
          style={styles.profileHeader}
        >
          <View style={styles.avatarContainer}>
            {userProfile.avatar ? (
              <Image source={{ uri: userProfile.avatar }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <Ionicons name="person" size={40} color="white" />
              </View>
            )}
          </View>
          <Text style={styles.userName}>{userProfile.name}</Text>
          <Text style={styles.userEmail}>{userProfile.email}</Text>
          
          {/* Level Progress */}
          <View style={styles.levelContainer}>
            <Text style={styles.levelText}>Seviye {userProfile.level}</Text>
            <View style={styles.xpProgressContainer}>
              <View style={styles.xpProgressBar}>
                <View
                  style={[
                    styles.xpProgressFill,
                    { width: `${(userProfile.xp / userProfile.totalXP) * 100}%` },
                  ]}
                />
              </View>
              <Text style={styles.xpText}>{userProfile.xp} / {userProfile.totalXP} XP</Text>
            </View>
          </View>
        </LinearGradient>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Ionicons name="flame" size={24} color="#FF6B6B" />
            <Text style={styles.statNumber}>{userProfile.streak}</Text>
            <Text style={styles.statLabel}>Günlük Seri</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="book" size={24} color="#4ECDC4" />
            <Text style={styles.statNumber}>{userProfile.lessonsCompleted}</Text>
            <Text style={styles.statLabel}>Tamamlanan Ders</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="trophy" size={24} color="#FFD700" />
            <Text style={styles.statNumber}>{userProfile.achievements}</Text>
            <Text style={styles.statLabel}>Başarı</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="medal" size={24} color="#CD7F32" />
            <Text style={styles.statNumber}>{userProfile.rank}</Text>
            <Text style={styles.statLabel}>Rütbe</Text>
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Başarılar</Text>
          <View style={styles.achievementsGrid}>
            {achievements.map((achievement) => (
              <View
                key={achievement.id}
                style={[
                  styles.achievementCard,
                  !achievement.unlocked && styles.lockedAchievement,
                ]}
              >
                <Ionicons
                  name={achievement.icon as any}
                  size={32}
                  color={achievement.unlocked ? '#FFD700' : '#999'}
                />
                <Text
                  style={[
                    styles.achievementTitle,
                    !achievement.unlocked && styles.lockedText,
                  ]}
                >
                  {achievement.title}
                </Text>
                <Text
                  style={[
                    styles.achievementDescription,
                    !achievement.unlocked && styles.lockedText,
                  ]}
                >
                  {achievement.description}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hesap</Text>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={() => handleMenuAction(item.action)}
            >
              <View style={styles.menuItemLeft}>
                <Ionicons
                  name={item.icon as any}
                  size={24}
                  color={item.color || '#4CAF50'}
                />
                <Text
                  style={[
                    styles.menuItemText,
                    item.color && { color: item.color },
                  ]}
                >
                  {item.title}
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  profileHeader: {
    padding: 20,
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: 15,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 20,
  },
  levelContainer: {
    alignItems: 'center',
    width: '100%',
  },
  levelText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  xpProgressContainer: {
    width: '100%',
    alignItems: 'center',
  },
  xpProgressBar: {
    width: '100%',
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 4,
    marginBottom: 8,
    overflow: 'hidden',
  },
  xpProgressFill: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 4,
  },
  xpText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    backgroundColor: 'white',
    marginTop: -20,
    marginHorizontal: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statCard: {
    width: '50%',
    alignItems: 'center',
    paddingVertical: 15,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
  section: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  achievementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  achievementCard: {
    width: '48%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
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
  lockedAchievement: {
    opacity: 0.6,
  },
  achievementTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  achievementDescription: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
    lineHeight: 16,
  },
  lockedText: {
    color: '#999',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 15,
  },
});

export default ProfileScreen;
