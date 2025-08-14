# SignTranslator Component Setup

## Overview
The SignTranslator component provides a complete sign language translation interface that displays both images and videos for words and letters. It automatically handles word-to-letter fallback and provides smooth playback controls.

## Features
- **Word-first translation**: Tries to find complete word signs before breaking into letters
- **Automatic progression**: Videos play sequentially with smooth transitions
- **Fallback handling**: Gracefully handles missing signs
- **Responsive design**: Works on both desktop and mobile
- **Playback controls**: Play, pause, next, previous, and reset functionality
- **Progress tracking**: Visual progress bar and sign counter
- **Loading states**: Proper loading indicators and error handling

## Folder Structure

Create the following folder structure in your `public` directory:

```
public/
└── signs/
    ├── videos/
    │   ├── hello.mp4
    │   ├── world.mp4
    │   ├── a.mp4
    │   ├── b.mp4
    │   ├── c.mp4
    │   └── ... (more video files)
    └── images/
        ├── hello.png
        ├── world.png
        ├── a.png
        ├── b.png
        ├── c.png
        └── ... (more image files)
```

## File Naming Convention
- **Videos**: `{word_or_letter}.mp4` (e.g., `hello.mp4`, `a.mp4`)
- **Images**: `{word_or_letter}.png` (e.g., `hello.png`, `a.png`)
- **Case**: All files should be lowercase
- **Format**: MP4 for videos, PNG for images (recommended)

## Component Usage

### Basic Usage
```jsx
import SignTranslator from '@/components/home/SignTranslator';

function MyComponent() {
  const [text, setText] = useState("");

  const handleComplete = () => {
    console.log("Translation completed");
  };

  return (
    <SignTranslator 
      text={text} 
      onComplete={handleComplete}
    />
  );
}
```

### Integration with TextToSign
The component is already integrated into the `TextToSign` component. Users can:
1. Type text in the input field
2. Click "Translate" or press Enter
3. Watch the sign sequence automatically play

## How It Works

### Translation Logic
1. **Input Processing**: Text is converted to lowercase and split into words
2. **Word Search**: For each word, checks if `/signs/videos/{word}.mp4` and `/signs/images/{word}.png` exist
3. **Letter Fallback**: If word not found, breaks word into individual letters
4. **File Validation**: Uses HEAD requests to check file existence
5. **Sign Generation**: Creates a sequence of signs with metadata

### Playback System
1. **Auto-play**: Videos automatically play when component is in playing state
2. **Progression**: Automatically moves to next sign when video ends
3. **Error Handling**: Skips missing signs with appropriate delays
4. **Controls**: Manual navigation with play/pause/next/previous buttons

### State Management
- `currentIndex`: Tracks current sign position
- `signs`: Array of processed sign objects
- `isPlaying`: Playback state
- `isLoading`: Processing state
- `error`: Error state for failed operations

## Sign Object Structure
```javascript
{
  type: 'word' | 'letter' | 'missing',
  value: string,
  videoPath?: string,
  imagePath?: string,
  displayText: string,
  error?: string
}
```

## Styling
The component uses TailwindCSS classes and is fully responsive:
- **Desktop**: Larger display area with side-by-side controls
- **Mobile**: Stacked layout with touch-friendly buttons
- **Progress**: Visual progress bar and sign counter
- **Loading**: Spinner animations and loading text

## Error Handling
- **Missing files**: Gracefully skips with placeholder display
- **Video errors**: Auto-advances to next sign
- **Network issues**: Shows appropriate error messages
- **Invalid input**: Handles empty or malformed text

## Future API Integration
The component is designed to be easily adaptable for API integration:

```javascript
// Replace file checking with API calls
const checkSignExists = async (word) => {
  const response = await fetch(`/api/signs/${word}`);
  return response.ok;
};

// Replace file paths with API URLs
const getSignData = async (word) => {
  const response = await fetch(`/api/signs/${word}/data`);
  return response.json();
};
```

## Performance Considerations
- **File checking**: Uses HEAD requests to minimize bandwidth
- **Video loading**: Videos load on-demand
- **Memory management**: Proper cleanup of timeouts and refs
- **Error boundaries**: Graceful degradation for missing content

## Accessibility
- **Keyboard navigation**: Full keyboard support for controls
- **Screen readers**: Proper ARIA labels and descriptions
- **Focus management**: Logical tab order and focus indicators
- **Error announcements**: Clear error messages for assistive technology

