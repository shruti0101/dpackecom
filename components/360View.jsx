"use client";
import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";

export default function Product360Modal({ isOpen, onClose, images = [] }) {
    const [index, setIndex] = useState(0);
    const modalRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.clientX;
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;

        const diff = e.clientX - startX.current;

        if (Math.abs(diff) > 20) {
            setIndex((prev) =>
                diff > 0
                    ? (prev - 1 + images.length) % images.length
                    : (prev + 1) % images.length
            );
            startX.current = e.clientX;
        }
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {/* Modal Box */}
                    <motion.div
                        ref={modalRef}
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl shadow-2xl p-5 w-[90%] max-w-2xl relative"
                    >
                        <button onClick={onClose}
                            className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
                        >
                            ✕
                        </button>

                        <div className="w-full h-[400px] bg-gray-50 rounded-xl overflow-hidden cursor-grab active:cursor-grabbing select-none"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                        >
                            <img
                                src={images[index]}
                                alt="product"
                                className="w-full h-full object-contain pointer-events-none"
                            />
                        </div>

                        <p className="flex justify-center items-center gap-4 text-sm text-gray-800 mt-3 text-center font-bold">
                         <ArrowBigLeftDash /> Drag left/right to rotate <ArrowBigRightDash />
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}