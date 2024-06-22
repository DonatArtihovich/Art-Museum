import { ArtworkSaveButton as Button, ArtworkSaveImage } from "./styled";
import bookmarkImage from '@assets/images/bookmark.svg'
import bookmarkFilledImage from '@assets/images/bookmark-filled.svg'
import { useRequiredContext } from "@utils/react/hooks";
import { StorageContext } from "@utils/react/storage-context";

type ArtworkSaveButtonProps = {
    artwork: Artwork;
}

export function ArtworkSaveButton({ artwork }: ArtworkSaveButtonProps) {
    const { isArtworkSaved, saveArtwork, removeArtwork } = useRequiredContext(StorageContext);
    const isSaved = isArtworkSaved(artwork.id);

    const onButtonClick = () => {
        if (!isSaved) {
            saveArtwork(artwork);
        } else {
            removeArtwork(artwork.id);
        }
    }

    return (
        <Button onClick={onButtonClick}>
            <ArtworkSaveImage
                src={isSaved
                    ? bookmarkFilledImage
                    : bookmarkImage
                }
            />
        </Button>
    )
}