# 🎨 Enhanced Mantine Styling Guide

This guide covers the enhanced styling system for your application using Mantine v7.

## 📁 File Structure

```
app/
├── theme.ts                    # Enhanced Mantine theme configuration
├── globals.css                 # Global CSS variables and utility classes
├── components-enhanced.css     # Enhanced component styles
├── styles/
│   └── mantine-utils.ts       # Mantine styling utilities
└── layout.tsx                 # Root layout with theme provider
```

## 🎯 Theme Configuration

### Enhanced Color Palette
- **Blue**: Primary brand color with 10 shades
- **Gray**: Neutral colors for text and backgrounds
- **Green**: Success states and positive actions
- **Red**: Error states and destructive actions
- **Purple**: Info states and accents
- **Orange**: Warning states and highlights

### Spacing Scale
```typescript
spacing: {
  xs: '0.5rem',    // 8px
  sm: '0.75rem',   // 12px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
}
```

### Border Radius Scale
```typescript
radius: {
  xs: '0.25rem',   // 4px
  sm: '0.375rem',  // 6px
  md: '0.5rem',    // 8px
  lg: '0.75rem',   // 12px
  xl: '1rem',      // 16px
  '2xl': '1.5rem', // 24px
}
```

## 🛠️ Usage Examples

### 1. Using Enhanced Theme

```tsx
import { Button, Card, TextInput } from '@mantine/core';
import { mantineStyles } from '@/app/styles/mantine-utils';

// Button with custom styling
<Button 
  styles={mantineStyles.buttonPrimary}
  size="lg"
  radius="md"
>
  Primary Action
</Button>

// Card with elevation
<Card 
  styles={mantineStyles.cardElevated}
  padding="lg"
  radius="lg"
>
  <Card.Section>Content</Card.Section>
</Card>

// Input with focus styling
<TextInput
  styles={mantineStyles.inputFocused}
  placeholder="Enter text..."
  radius="md"
/>
```

### 2. Using Utility Classes

```tsx
// Layout utilities
<div className="container mx-auto p-lg">
  <div className="flex flex-col gap-md">
    <h1 className="text-center font-bold text-2xl">
      Title
    </h1>
    <p className="text-muted text-center">
      Description
    </p>
  </div>
</div>

// Card with hover effects
<div className="card transition hover:shadow-lg">
  <div className="card-header">
    <h3 className="card-title">Card Title</h3>
  </div>
  <p className="card-description">Card content</p>
</div>
```

### 3. Component Styling Patterns

#### Buttons
```tsx
// Primary button
<Button 
  className="button-primary"
  size="md"
  radius="md"
>
  Primary
</Button>

// Secondary button
<Button 
  className="button-secondary"
  variant="outline"
  size="md"
>
  Secondary
</Button>

// Ghost button
<Button 
  className="button-ghost"
  variant="subtle"
  size="md"
>
  Ghost
</Button>
```

#### Cards
```tsx
// Interactive card
<div className="card">
  <div className="card-header">
    <h3 className="card-title">Card Title</h3>
    <p className="card-description">Card description</p>
  </div>
  <div className="card-content">
    Card content goes here
  </div>
</div>
```

#### Forms
```tsx
<div className="form-group">
  <label className="form-label">Email</label>
  <input 
    type="email" 
    className="form-input"
    placeholder="Enter your email"
  />
</div>
```

## 🎨 Design System Principles

### 1. Consistency
- Use the defined color palette consistently
- Apply spacing scale uniformly
- Maintain consistent border radius across components

### 2. Accessibility
- Ensure proper contrast ratios
- Use semantic color meanings (green for success, red for errors)
- Provide focus states for interactive elements

### 3. Responsiveness
- Use responsive utility classes
- Test on multiple screen sizes
- Leverage Mantine's responsive props

### 4. Performance
- Use CSS variables for theme values
- Minimize custom CSS when Mantine utilities suffice
- Leverage Mantine's built-in optimizations

## 🔧 Customization

### Adding New Colors
```typescript
// In theme.ts
const customTeal: MantineColorsTuple = [
  '#f0fdfa',
  '#ccfbf1',
  '#99f6e4',
  '#5eead4',
  '#2dd4bf',
  '#14b8a6',
  '#0d9488',
  '#0f766e',
  '#115e59',
  '#134e4a'
];

// Add to colors object
colors: {
  // ... existing colors
  teal: customTeal,
}
```

### Creating Custom Styles
```typescript
// In mantine-utils.ts
export const customButtonStyle = (theme: MantineTheme) => ({
  root: {
    background: `linear-gradient(45deg, ${theme.colors.purple[6]}, ${theme.colors.blue[6]})`,
    border: 'none',
    borderRadius: theme.radius.xl,
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
});
```

## 📱 Responsive Design

### Breakpoints
```typescript
breakpoints: {
  xs: '36em',  // 576px
  sm: '48em',  // 768px
  md: '62em',  // 992px
  lg: '75em',  // 1200px
  xl: '88em',  // 1408px
}
```

### Responsive Utilities
```css
/* Mobile first approach */
.container {
  padding: var(--spacing-sm);
}

@media (min-width: 768px) {
  .container {
    padding: var(--spacing-lg);
  }
}

@media (min-width: 1024px) {
  .container {
    padding: var(--spacing-xl);
  }
}
```

## 🚀 Best Practices

1. **Use Mantine's built-in props** before custom CSS
2. **Leverage the theme system** for consistent styling
3. **Use utility classes** for simple styling needs
4. **Create reusable style objects** for complex components
5. **Test across different themes** (light/dark mode)
6. **Maintain accessibility standards**
7. **Optimize for performance** by minimizing custom CSS

## 🎯 Migration from Old Styles

When updating existing components:

1. Replace custom CSS with Mantine props where possible
2. Use the enhanced theme colors and spacing
3. Apply consistent border radius and shadows
4. Leverage the new utility classes
5. Test thoroughly across all themes

## 📚 Resources

- [Mantine v7 Documentation](https://mantine.dev/)
- [Mantine Theme Configuration](https://mantine.dev/theming/theme-object/)
- [Mantine Component Styles](https://mantine.dev/theming/styles/)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
