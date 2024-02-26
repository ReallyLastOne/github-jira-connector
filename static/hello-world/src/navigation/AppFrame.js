import {N40} from '@atlaskit/theme/colors';
import {token} from '@atlaskit/tokens';

const AppFrame = ({
                      children,
                  }) => {
    return (<div
        onClick={(e) => e.preventDefault()}
        style={{
            height: '100%', minHeight: 600,
        }}
    >
        <div
            style={{
                height: '100%', display: 'flex',
            }}
        >
            <div
                style={{
                    borderRight: `1px solid ${token('color.border', N40)}`,
                }}
            >
                {children}
            </div>
        </div>
    </div>);
};

export default AppFrame;
