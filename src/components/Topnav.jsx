import { MapPin } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';

const topNavInfoLeft = [
  { icon: <MapPin size={18} />, label: 'Via Andrea Bafile,3 - Roma' },
  { icon: <Clock size={18} />, label: 'Lun-Ven 09:00 - 18:00' },
];
const topNavInfoRight = [
  { icon: <Phone size={18} />, label: '+39 335 1092367' },
  { icon: <Mail size={18} />, label: 'info@autobafile.it' },
];

export const Topnav = ({scrolled}) => {
    return (
      <div
        className="top-0 left-0 w-full bg-gray-200 px-5 hidden md:block">
        <div className="flex justify-between items-center p-3">
          <div className="flex space-x-5">
            {topNavInfoLeft.map((text, index) => (
              <div className="inline-flex items-center space-x-1">
                <span className="text-accent">{text.icon}</span>
                <span className="text-sm">{text.label}</span>
              </div>
            ))}
          </div>
          <div className="flex space-x-5">
            {topNavInfoRight.map((text, index) => (
              <div className="inline-flex items-center space-x-1">
                <span className="text-accent">{text.icon}</span>
                <span className="text-sm">{text.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};
