const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Event title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters'],
    minlength: [5, 'Title must be at least 5 characters']
  },
  description: {
    type: String,
    required: [true, 'Event description is required'],
    maxlength: [1000, 'Description cannot exceed 1000 characters'],
    minlength: [10, 'Description must be at least 10 characters']
  },
  longDescription: {
    type: String,
    maxlength: [5000, 'Long description cannot exceed 5000 characters']
  },
  date: {
    type: Date,
    required: [true, 'Event date is required'],
    validate: {
      validator: function(v) {
        return v > new Date();
      },
      message: 'Event date must be in the future'
    }
  },
  time: {
    type: String,
    required: [true, 'Event time is required'],
    match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Time must be in HH:MM format']
  },
  duration: {
    type: String,
    required: [true, 'Event duration is required'],
    maxlength: [50, 'Duration cannot exceed 50 characters']
  },
  difficulty: {
    type: String,
    enum: {
      values: ['Easy', 'Medium', 'Hard', 'Expert'],
      message: 'Difficulty must be Easy, Medium, Hard, or Expert'
    },
    required: [true, 'Difficulty level is required']
  },
  status: {
    type: String,
    enum: {
      values: ['upcoming', 'live', 'ended'],
      message: 'Status must be upcoming, live, or ended'
    },
    default: 'upcoming'
  },
  category: {
    type: String,
    enum: {
      values: ['DSA', 'Web Development', 'AI/ML', 'Competitive Programming', 'Hackathon'],
      message: 'Invalid category'
    },
    required: [true, 'Event category is required']
  },
  maxParticipants: {
    type: Number,
    default: 500,
    min: [1, 'Maximum participants must be at least 1'],
    max: [10000, 'Maximum participants cannot exceed 10000']
  },
  participants: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    registeredAt: {
      type: Date,
      default: Date.now
    },
    score: {
      type: Number,
      default: 0,
      min: [0, 'Score cannot be negative']
    },
    timeCompleted: {
      type: String,
      maxlength: [20, 'Time completed cannot exceed 20 characters']
    },
    rank: {
      type: Number,
      min: [1, 'Rank must be at least 1']
    },
    submissions: [{
      problemId: String,
      code: String,
      language: String,
      submittedAt: {
        type: Date,
        default: Date.now
      },
      status: {
        type: String,
        enum: ['pending', 'accepted', 'wrong_answer', 'time_limit_exceeded', 'runtime_error'],
        default: 'pending'
      },
      score: {
        type: Number,
        default: 0
      }
    }]
  }],
  prizePool: {
    total: {
      type: String,
      required: [true, 'Total prize pool is required'],
      maxlength: [50, 'Prize pool cannot exceed 50 characters']
    },
    distribution: [{
      position: {
        type: Number,
        required: true,
        min: [1, 'Position must be at least 1']
      },
      amount: {
        type: String,
        required: true,
        maxlength: [50, 'Prize amount cannot exceed 50 characters']
      }
    }]
  },
  rules: [{
    type: String,
    trim: true,
    maxlength: [500, 'Rule cannot exceed 500 characters']
  }],
  schedule: [{
    time: {
      type: String,
      required: true,
      match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Time must be in HH:MM format']
    },
    event: {
      type: String,
      required: true,
      maxlength: [200, 'Schedule event cannot exceed 200 characters']
    }
  }],
  registrationUrl: {
    type: String,
    required: [true, 'Registration URL is required'],
    validate: {
      validator: function(v) {
        return /^https?:\/\/.+/.test(v);
      },
      message: 'Registration URL must be a valid URL'
    }
  },
  problemStatements: [{
    title: {
      type: String,
      required: true,
      maxlength: [200, 'Problem title cannot exceed 200 characters']
    },
    description: {
      type: String,
      required: true,
      maxlength: [5000, 'Problem description cannot exceed 5000 characters']
    },
    difficulty: {
      type: String,
      enum: ['Easy', 'Medium', 'Hard'],
      required: true
    },
    points: {
      type: Number,
      required: true,
      min: [1, 'Points must be at least 1'],
      max: [1000, 'Points cannot exceed 1000']
    },
    testCases: [{
      input: {
        type: String,
        required: true
      },
      output: {
        type: String,
        required: true
      },
      isHidden: {
        type: Boolean,
        default: false
      }
    }],
    constraints: {
      timeLimit: {
        type: Number,
        default: 1000, // milliseconds
        min: [100, 'Time limit must be at least 100ms']
      },
      memoryLimit: {
        type: Number,
        default: 256, // MB
        min: [64, 'Memory limit must be at least 64MB']
      }
    }
  }],
  tags: [{
    type: String,
    trim: true,
    lowercase: true,
    maxlength: [30, 'Tag cannot exceed 30 characters']
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Event creator is required']
  },
  registrationDeadline: {
    type: Date,
    validate: {
      validator: function(v) {
        return !v || v <= this.date;
      },
      message: 'Registration deadline must be before event date'
    }
  },
  isPublished: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better performance
eventSchema.index({ date: 1, status: 1 });
eventSchema.index({ category: 1 });
eventSchema.index({ createdBy: 1 });
eventSchema.index({ status: 1, isActive: 1 });
eventSchema.index({ tags: 1 });
eventSchema.index({ difficulty: 1 });

// Virtual for participant count
eventSchema.virtual('participantCount').get(function() {
  return this.participants.length;
});

// Virtual for spots remaining
eventSchema.virtual('spotsRemaining').get(function() {
  return Math.max(0, this.maxParticipants - this.participants.length);
});

// Virtual for registration status
eventSchema.virtual('registrationOpen').get(function() {
  const now = new Date();
  const deadline = this.registrationDeadline || this.date;
  return this.status === 'upcoming' && now < deadline && this.spotsRemaining > 0;
});

// Pre-save middleware to update status based on date
eventSchema.pre('save', function(next) {
  const now = new Date();
  const eventDate = new Date(this.date);
  const eventEndTime = new Date(eventDate.getTime() + (3 * 60 * 60 * 1000)); // Assuming 3 hours duration
  
  if (now < eventDate) {
    this.status = 'upcoming';
  } else if (now >= eventDate && now < eventEndTime) {
    this.status = 'live';
  } else {
    this.status = 'ended';
  }
  
  next();
});

// Static method to get upcoming events
eventSchema.statics.getUpcoming = function(limit = 10) {
  return this.find({
    status: 'upcoming',
    isActive: true,
    isPublished: true
  })
  .populate('createdBy', 'name email')
  .sort({ date: 1 })
  .limit(limit);
};

// Static method to get live events
eventSchema.statics.getLive = function() {
  return this.find({
    status: 'live',
    isActive: true,
    isPublished: true
  })
  .populate('createdBy', 'name email')
  .populate('participants.user', 'name email avatar');
};

// Method to check if user is registered
eventSchema.methods.isUserRegistered = function(userId) {
  return this.participants.some(p => p.user.toString() === userId.toString());
};

// Method to register user
eventSchema.methods.registerUser = function(userId) {
  if (this.isUserRegistered(userId)) {
    throw new Error('User already registered for this event');
  }
  
  if (!this.registrationOpen) {
    throw new Error('Registration is closed for this event');
  }
  
  this.participants.push({
    user: userId,
    registeredAt: new Date()
  });
  
  return this.save();
};

// Method to unregister user
eventSchema.methods.unregisterUser = function(userId) {
  const participantIndex = this.participants.findIndex(
    p => p.user.toString() === userId.toString()
  );
  
  if (participantIndex === -1) {
    throw new Error('User not registered for this event');
  }
  
  if (this.status !== 'upcoming') {
    throw new Error('Cannot unregister from ongoing or ended events');
  }
  
  this.participants.splice(participantIndex, 1);
  return this.save();
};

module.exports = mongoose.model('Event', eventSchema);