import { FocusNode } from '@please/lrud'

interface Props {
    handleInfoButtonClick: () => void
}
export const InfoButton = ({ handleInfoButtonClick }: Props) => {
    return (
        <FocusNode
        focusedClass='button-isFocused'
            onClick={handleInfoButtonClick}
            className="button-base-styles px-4 bg-secondary text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50"
        >
            <span className="font-semibold text-lg uppercase">Další info</span>
        </FocusNode>
    )
}
