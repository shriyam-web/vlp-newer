'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ShareProfiled({ developer }: { developer: any }) {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        const shareData = {
            title: `${developer.name} - ${developer.role}`,
            text: `Check out ${developer.name}'s profile at VLP Technologies`,
            url: `${window.location.origin}/team/${developer.id}`,
        };
        try {
            if (navigator.share) await navigator.share(shareData);
            else {
                await navigator.clipboard.writeText(shareData.url);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        } catch {
            await navigator.clipboard.writeText(shareData.url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <Button onClick={handleShare} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
            {copied ? 'Link Copied!' : 'Share Profile'}
        </Button>
    );
}
