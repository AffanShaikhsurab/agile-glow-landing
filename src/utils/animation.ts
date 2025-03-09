
// Animation utility functions

/**
 * Throttle function to limit how often a function can be called
 * @param callback The function to throttle
 * @param delay The delay in milliseconds
 */
export const throttle = (callback: Function, delay: number = 200): Function => {
  let isThrottled = false;
  let savedArgs: any = null;
  let savedThis: any = null;

  return function wrapper(this: any, ...args: any[]) {
    if (isThrottled) {
      savedArgs = args;
      savedThis = this;
      return;
    }

    callback.apply(this, args);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, delay);
  };
};

/**
 * Debounce function to delay execution until after a period of inactivity
 * @param callback The function to debounce
 * @param delay The delay in milliseconds
 */
export const debounce = (callback: Function, delay: number = 200): Function => {
  let timeout: NodeJS.Timeout;

  return function(this: any, ...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(this, args), delay);
  };
};

/**
 * Linear interpolation between two values
 * @param start The start value
 * @param end The end value
 * @param amount The amount to interpolate (0-1)
 */
export const lerp = (start: number, end: number, amount: number): number => {
  return (1 - amount) * start + amount * end;
};

/**
 * Calculate distance between two points
 * @param x1 First point x coordinate
 * @param y1 First point y coordinate
 * @param x2 Second point x coordinate
 * @param y2 Second point y coordinate
 */
export const distance = (x1: number, y1: number, x2: number, y2: number): number => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

/**
 * Map a value from one range to another
 * @param value The value to map
 * @param inMin The minimum of the input range
 * @param inMax The maximum of the input range
 * @param outMin The minimum of the output range
 * @param outMax The maximum of the output range
 */
export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

/**
 * Clamp a value between a minimum and maximum
 * @param value The value to clamp
 * @param min The minimum value
 * @param max The maximum value
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Set up intersection observer for animation on scroll
 * @param elementsSelector CSS selector for elements to observe
 * @param visibleClass Class to add when element is visible
 * @param threshold Threshold for visibility (0-1)
 * @param rootMargin Root margin for the observer
 */
export const setupScrollAnimations = (
  elementsSelector: string,
  visibleClass: string = 'visible',
  threshold: number = 0.1,
  rootMargin: string = '0px'
): void => {
  const elements = document.querySelectorAll(elementsSelector);
  
  if (!elements.length) return;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(visibleClass);
        } else {
          // Optional: remove the class when element is out of view
          // entry.target.classList.remove(visibleClass);
        }
      });
    },
    {
      threshold,
      rootMargin,
    }
  );
  
  elements.forEach((element) => {
    observer.observe(element);
  });
};
