const mongoose = require('mongoose');
const User = require('../models/User');
const Event = require('../models/Event');
const Post = require('../models/Post');
const News = require('../models/News');
const database = require('./database');
require('dotenv').config();

const seedData = async () => {
  try {
    console.log('🌱 Starting database seeding...');
    
    // Connect to database
    await database.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/codingarena');
    
    // Clear existing data
    console.log('🧹 Clearing existing data...');
    await User.deleteMany({});
    await Event.deleteMany({});
    await Post.deleteMany({});
    await News.deleteMany({});

    // Create admin user
    console.log('👤 Creating admin user...');
    const adminUser = new User({
      name: 'Admin User',
      email: 'admin@codingarena.com',
      password: 'admin123',
      role: 'admin',
      avatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
      bio: 'Platform administrator and coding enthusiast',
      skills: ['JavaScript', 'Python', 'System Design', 'Database Management'],
      isEmailVerified: true
    });
    await adminUser.save();

    // Create sample users
    console.log('👥 Creating sample users...');
    const users = await User.insertMany([
      {
        name: 'Alex Rodriguez',
        email: 'alex@example.com',
        password: 'password123',
        avatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
        bio: 'Full-stack developer passionate about algorithms and data structures',
        skills: ['JavaScript', 'Python', 'Algorithms', 'React', 'Node.js'],
        achievements: [
          { 
            title: 'Problem Solver', 
            description: 'Solved 100+ problems', 
            icon: 'trophy',
            earnedAt: new Date('2024-12-01')
          },
          { 
            title: 'Speed Demon', 
            description: 'Fastest solution in contest', 
            icon: 'zap',
            earnedAt: new Date('2024-12-15')
          }
        ],
        stats: { 
          eventsParticipated: 15, 
          eventsWon: 3, 
          totalScore: 2450,
          rank: 1
        },
        isEmailVerified: true
      },
      {
        name: 'Sarah Chen',
        email: 'sarah@example.com',
        password: 'password123',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
        bio: 'Frontend specialist with a love for clean, efficient code',
        skills: ['React', 'TypeScript', 'CSS', 'UI/UX', 'MongoDB'],
        achievements: [
          { 
            title: 'UI Wizard', 
            description: 'Created stunning interfaces', 
            icon: 'star',
            earnedAt: new Date('2024-11-20')
          },
          { 
            title: 'React Pro', 
            description: 'React expert level achieved', 
            icon: 'code',
            earnedAt: new Date('2024-12-10')
          }
        ],
        stats: { 
          eventsParticipated: 12, 
          eventsWon: 2, 
          totalScore: 2100,
          rank: 2
        },
        isEmailVerified: true
      },
      {
        name: 'David Kim',
        email: 'david@example.com',
        password: 'password123',
        avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
        bio: 'Machine learning engineer and competitive programmer',
        skills: ['Python', 'Machine Learning', 'TensorFlow', 'Algorithms', 'Data Science'],
        achievements: [
          { 
            title: 'ML Mastermind', 
            description: 'AI/ML competition winner', 
            icon: 'brain',
            earnedAt: new Date('2024-11-15')
          }
        ],
        stats: { 
          eventsParticipated: 8, 
          eventsWon: 1, 
          totalScore: 1850,
          rank: 3
        },
        isEmailVerified: true
      },
      {
        name: 'Emma Wilson',
        email: 'emma@example.com',
        password: 'password123',
        avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
        bio: 'Backend developer with expertise in system architecture',
        skills: ['Java', 'Spring Boot', 'Microservices', 'Docker', 'Kubernetes'],
        achievements: [
          { 
            title: 'System Architect', 
            description: 'Designed scalable systems', 
            icon: 'server',
            earnedAt: new Date('2024-12-05')
          }
        ],
        stats: { 
          eventsParticipated: 10, 
          eventsWon: 1, 
          totalScore: 1750,
          rank: 4
        },
        isEmailVerified: true
      }
    ]);

    // Create sample events
    console.log('📅 Creating sample events...');
    const events = await Event.insertMany([
      {
        title: 'Weekly DSA Challenge #47',
        description: 'Test your data structures and algorithms knowledge with challenging problems',
        longDescription: 'This comprehensive coding challenge will test your understanding of fundamental data structures and algorithms. Participants will solve a series of progressively difficult problems covering topics like arrays, linked lists, trees, graphs, dynamic programming, and more.',
        date: new Date('2025-01-15T18:00:00Z'),
        time: '18:00',
        duration: '3 hours',
        difficulty: 'Medium',
        category: 'DSA',
        maxParticipants: 500,
        prizePool: {
          total: '$500',
          distribution: [
            { position: 1, amount: '$250' },
            { position: 2, amount: '$150' },
            { position: 3, amount: '$100' }
          ]
        },
        rules: [
          'No external libraries allowed except standard language libraries',
          'Solutions must be submitted within the time limit',
          'Code must be original and written during the contest',
          'Multiple programming languages supported (Python, Java, C++, JavaScript)',
          'Partial scoring available for incomplete solutions'
        ],
        schedule: [
          { time: '18:00', event: 'Registration closes & contest begins' },
          { time: '18:15', event: 'Problem statements released' },
          { time: '20:45', event: '15-minute warning' },
          { time: '21:00', event: 'Contest ends & solutions submitted' }
        ],
        registrationUrl: 'https://forms.google.com/contest-registration',
        createdBy: adminUser._id,
        participants: [
          { 
            user: users[0]._id, 
            score: 95, 
            timeCompleted: '2h 15m', 
            rank: 1,
            registeredAt: new Date('2025-01-10')
          },
          { 
            user: users[1]._id, 
            score: 92, 
            timeCompleted: '2h 28m', 
            rank: 2,
            registeredAt: new Date('2025-01-11')
          }
        ],
        tags: ['algorithms', 'data-structures', 'competitive-programming'],
        isPublished: true
      },
      {
        title: 'Frontend Showdown #23',
        description: 'Build amazing UIs in this rapid development contest',
        longDescription: 'Showcase your frontend skills by building responsive, interactive user interfaces. This contest focuses on modern web technologies, design principles, and user experience.',
        date: new Date('2025-01-18T15:00:00Z'),
        time: '15:00',
        duration: '4 hours',
        difficulty: 'Hard',
        category: 'Web Development',
        maxParticipants: 300,
        prizePool: {
          total: '$750',
          distribution: [
            { position: 1, amount: '$400' },
            { position: 2, amount: '$200' },
            { position: 3, amount: '$150' }
          ]
        },
        rules: [
          'Use any frontend framework or vanilla JavaScript',
          'Responsive design is mandatory',
          'Code must be original and written during the contest',
          'UI/UX design will be evaluated'
        ],
        schedule: [
          { time: '15:00', event: 'Contest begins' },
          { time: '15:30', event: 'Design requirements released' },
          { time: '18:30', event: '30-minute warning' },
          { time: '19:00', event: 'Submission deadline' }
        ],
        registrationUrl: 'https://forms.google.com/frontend-contest',
        createdBy: adminUser._id,
        participants: [
          { 
            user: users[1]._id, 
            registeredAt: new Date('2025-01-12')
          }
        ],
        tags: ['frontend', 'ui-ux', 'web-development'],
        isPublished: true
      }
    ]);

    // Create sample posts
    console.log('💬 Creating sample posts...');
    await Post.insertMany([
      {
        title: 'Optimizing Binary Search: A Deep Dive',
        content: `I've been working on optimizing binary search algorithms for competitive programming. Here are some advanced techniques I discovered:

1. **Template Method**: Create a generic binary search template that works for various scenarios
2. **Boundary Handling**: Proper handling of edge cases and boundaries
3. **Integer Overflow**: Using safe arithmetic to prevent overflow issues

The key insight is to think of binary search not just as finding an element, but as finding the boundary between "yes" and "no" answers to a monotonic predicate.

Here's a robust template:

\`\`\`python
def binary_search(left, right, check):
    while left < right:
        mid = left + (right - left) // 2
        if check(mid):
            right = mid
        else:
            left = mid + 1
    return left
\`\`\`

This approach has helped me solve complex problems more efficiently. What are your favorite binary search optimizations?`,
        author: users[0]._id,
        category: 'dsa',
        tags: ['algorithms', 'binary-search', 'optimization', 'competitive-programming'],
        likes: [{ user: users[1]._id }, { user: users[2]._id }],
        comments: [
          { 
            user: users[1]._id, 
            content: 'Great insights! I especially like the template approach. Have you tried this with floating-point binary search?',
            createdAt: new Date('2025-01-10T10:30:00Z')
          },
          {
            user: users[2]._id,
            content: 'This is exactly what I needed for my recent contest. The boundary thinking really helps!',
            createdAt: new Date('2025-01-10T14:20:00Z')
          }
        ],
        views: 156
      },
      {
        title: 'React Performance Optimization Tips',
        content: `After participating in several frontend contests, I've learned some crucial React performance optimization techniques:

## 1. Memoization Strategies
- Use \`React.memo\` for component memoization
- \`useMemo\` for expensive calculations
- \`useCallback\` for function references

## 2. Code Splitting
- Dynamic imports with \`React.lazy\`
- Route-based code splitting
- Component-based splitting for large features

## 3. Virtual Scrolling
For large lists, implement virtual scrolling to render only visible items.

## 4. Bundle Analysis
Regular bundle analysis helps identify optimization opportunities.

These techniques have significantly improved my contest submissions' performance scores!`,
        author: users[1]._id,
        category: 'web-dev',
        tags: ['react', 'performance', 'optimization', 'frontend'],
        likes: [{ user: users[0]._id }, { user: users[3]._id }],
        comments: [
          {
            user: users[0]._id,
            content: 'Virtual scrolling is a game-changer! Do you have any library recommendations?',
            createdAt: new Date('2025-01-11T09:15:00Z')
          }
        ],
        views: 203
      }
    ]);

    // Create sample news
    console.log('📰 Creating sample news...');
    await News.insertMany([
      {
        title: 'Coding Arena Reaches 10,000 Active Users Milestone',
        excerpt: 'We\'re thrilled to announce that our community has grown to over 10,000 active developers! Thank you for making Coding Arena the premier destination for competitive programming.',
        content: `# A Major Milestone! 🎉

We're incredibly excited to share that Coding Arena has officially reached **10,000 active users**! This milestone represents months of hard work from our team and incredible engagement from our amazing community.

## What This Means

- **Larger Competition Pools**: More participants means more competitive and exciting contests
- **Diverse Skill Levels**: From beginners to experts, our community spans all experience levels
- **Global Reach**: Users from over 50 countries participate in our events
- **Knowledge Sharing**: Our community forum has become a hub for learning and collaboration

## Looking Forward

With this growth, we're planning several exciting updates:

1. **New Contest Categories**: AI/ML challenges, system design contests
2. **Enhanced Leaderboards**: More detailed statistics and achievements
3. **Mobile App**: Native mobile experience coming soon
4. **Corporate Partnerships**: Exciting collaborations with tech companies

## Thank You

This milestone wouldn't be possible without each and every one of you. Whether you're a regular competitor, community contributor, or just getting started - you make Coding Arena special.

Here's to the next 10,000 users and beyond! 🚀`,
        author: adminUser._id,
        category: 'announcements',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
        readTime: '3 min read',
        isPublished: true,
        isFeatured: true,
        isTrending: true,
        tags: ['milestone', 'community', 'growth', 'announcement'],
        views: 1247
      },
      {
        title: 'New AI/ML Contest Category Launches Next Month',
        excerpt: 'Get ready for our most exciting addition yet - dedicated AI and Machine Learning competitions with real-world problem sets.',
        content: `# Introducing AI/ML Contests! 🤖

We're thrilled to announce the launch of our new **AI/ML Contest Category**, starting February 2025!

## What to Expect

### Contest Format
- **Duration**: 6-8 hours for comprehensive challenges
- **Problems**: Real-world ML scenarios and algorithmic challenges
- **Datasets**: Curated datasets for practical applications
- **Evaluation**: Both accuracy and efficiency metrics

### Topics Covered
- Machine Learning Algorithms
- Deep Learning Architectures
- Natural Language Processing
- Computer Vision
- Data Analysis and Preprocessing
- Model Optimization

### Tools and Frameworks
Participants can use popular ML libraries including:
- TensorFlow/Keras
- PyTorch
- Scikit-learn
- Pandas/NumPy
- Jupyter Notebooks (supported environment)

## Prize Pool
Our inaugural AI/ML contest will feature a **$2,000 prize pool**:
- 🥇 1st Place: $1,000
- 🥈 2nd Place: $600
- 🥉 3rd Place: $400

## Registration Opens Soon
Keep an eye on your notifications - registration for our first AI/ML contest opens January 25th!

Ready to put your machine learning skills to the test? 💪`,
        author: adminUser._id,
        category: 'features',
        image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2',
        readTime: '4 min read',
        isPublished: true,
        isFeatured: false,
        isTrending: true,
        tags: ['ai-ml', 'new-feature', 'contests', 'machine-learning'],
        views: 892
      }
    ]);

    console.log('✅ Database seeded successfully!');
    console.log(`👤 Created ${users.length + 1} users (including admin)`);
    console.log(`📅 Created ${events.length} events`);
    console.log('💬 Created 2 community posts');
    console.log('📰 Created 2 news articles');
    
    // Display login credentials
    console.log('\n🔑 Login Credentials:');
    console.log('Admin: admin@codingarena.com / admin123');
    console.log('User: alex@example.com / password123');
    console.log('User: sarah@example.com / password123');
    
    await database.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error);
    await database.disconnect();
    process.exit(1);
  }
};

// Run seeding if this file is executed directly
if (require.main === module) {
  seedData();
}

module.exports = seedData;