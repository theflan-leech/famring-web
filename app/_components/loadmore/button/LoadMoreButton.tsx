
import './LoadMoreButton.scss'
export default function LoadMoreButton({ onClick }: { onClick: () => void }) {
    return (
        <div className='button-load-more-container'>
            <button className='button-load-more' onClick={onClick}>더보기</button>
        </div>
    );
}