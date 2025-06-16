import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import SuccessMatrix from "./SuccessMatrix";
import { useEffect } from "react";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      y: 50,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto"
          onClick={onClose}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Modal container with scrollable content */}
          <motion.div
            className="bg-primary border-2 border-secondary rounded-3xl p-12 w-full max-w-3xl max-h-[90vh] flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-red-400 hover:text-red-300 z-10"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Scrollable content container */}
            <div className="overflow-y-auto flex-1 pr-2 custom-scrollbar">
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-white">
                    {project.name}
                  </h2>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 mt-1"
                    aria-label="View project source code"
                  >
                    <ExternalLink />
                  </a>
                </div>

                <div className="flex justify-center mb-4">
                  <img
                    src={project.images}
                    alt={project.name}
                    className="w-full max-h-64 object-contain rounded-lg bg-gray-800 p-2"
                  />
                </div>

                <p className="text-gray-200 mb-4">{project.description}</p>

                <SuccessMatrix matrix={project.successMatrix} />

                <p className="font-semibold text-white mt-4">
                  <span className="text-red-400">Technologies:</span>{" "}
                  {project.technologies}
                </p>
              </div>
            </div>

            {/* Bottom gradient for scroll indication */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-primary to-transparent pointer-events-none"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
