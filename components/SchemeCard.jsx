import { ArrowRight } from 'lucide-react';
import DisplayMarkdown from './DisplayMarkdown';

const SchemeCard = ({ scheme }) => {
    return (
        <div className="h-full group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
            <div className="p-6 space-y-4 flex-grow">
                {/* Title and Description */}
                <div className="space-y-2">
                    <h2 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                        {scheme.title}
                    </h2>
                    <div className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                        <DisplayMarkdown content={scheme.objective} />
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {scheme.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-medium hover:bg-orange-100 transition-colors duration-200">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Action Button */}
            <div className="flex gap-3 p-6 pt-0">
                <button
                    className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center gap-2 group shadow-sm"
                >
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
            </div>
        </div>
    );
};

export default SchemeCard;
