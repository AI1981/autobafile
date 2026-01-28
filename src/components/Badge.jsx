
const Badge = ({ className = "", size = "sm", children }) => {
    const baseClasses = 'text-accent uppercase';
    
    const sizeClasses = {
        default:"text-sm",
        base:"text-base",
        lg:"text-lg",
    }
    
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`
    return (

      <span className={classes}>// { children } //</span>

  )
} 

export default Badge