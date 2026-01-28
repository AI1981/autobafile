
const Button = ({ className = "", size = "default", children }) => {
    const baseClasses =
      'transition-all duration-300 border border-accent hover:border-accent hover:bg-transparent hover:text-accent bg-accent text-white uppercase shadow-lg mt-3';
    
    const sizeClasses = {
        sm:"px-4 py-2 text-sm",
        default:"px-6 py-3 text-base",
        lg:"px-8 py-4 text-lg",
    }
    
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`
    return (
      <button className={classes}>
          <span className="relative flex items-center justify-center gap-2">{ children }</span>
      </button>
  )
}

export default Button