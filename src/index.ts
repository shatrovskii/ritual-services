import awsExports from './aws-exports';
import {Amplify} from 'aws-amplify';

const retroIcon = `<g id="icon-24" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="icon-48" transform="translate(1.000000, 2.000000)" fill="currentColor" fill-rule="nonzero">
              <path d="m22 0h-20c-1.103 0-2 0.89697-2 2v20c0 1.103 0.89697 2 2 2h20c1.103 0 2-0.89697 2-2v-20c0-1.103-0.89697-2-2-2zm-12 2.5c0-0.27637 0.22363-0.5 0.5-0.5h3c0.27637 0 0.5 0.22363 0.5 0.5v2c0 0.27637-0.22363 0.5-0.5 0.5h-1v0.5c0 0.27637-0.22363 0.5-0.5 0.5s-0.5-0.22363-0.5-0.5v-0.5h-1c-0.27637 0-0.5-0.22363-0.5-0.5v-2zm1.5 6.5c-0.27637 0-0.5-0.22363-0.5-0.5v-1c0-0.27637 0.22363-0.5 0.5-0.5s0.5 0.22363 0.5 0.5v1c0 0.27637-0.22363 0.5-0.5 0.5zm0.5 1.5v1c0 0.27637-0.22363 0.5-0.5 0.5s-0.5-0.22363-0.5-0.5v-1c0-0.27637 0.22363-0.5 0.5-0.5s0.5 0.22363 0.5 0.5zm-7.5-3v-0.5h-1c-0.27637 0-0.5-0.22363-0.5-0.5v-2c0-0.27637 0.22363-0.5 0.5-0.5h3c0.27637 0 0.5 0.22363 0.5 0.5v2c0 0.27637-0.22363 0.5-0.5 0.5h-1v0.5c0 0.27637-0.22363 0.5-0.5 0.5s-0.5-0.22363-0.5-0.5zm13.5 14c0 0.27637-0.22363 0.5-0.5 0.5h-4c-0.27637 0-0.5-0.22363-0.5-0.5v-0.5h-3v0.5c0 0.27637-0.22363 0.5-0.5 0.5h-4c-0.27637 0-0.5-0.22363-0.5-0.5v-2c0-0.27637 0.22363-0.5 0.5-0.5h1.5v-1.5c0-0.27637 0.22363-0.5 0.5-0.5v-0.5c0-0.27637 0.22363-0.5 0.5-0.5s0.5 0.22363 0.5 0.5v0.5h0.5v-1.5c0-0.27637 0.22363-0.5 0.5-0.5h1.5v-1.5c0-0.27637 0.22363-0.5 0.5-0.5s0.5 0.22363 0.5 0.5v1.5h1.5c0.27637 0 0.5 0.22363 0.5 0.5v1.5h0.5v-0.5c0-0.27637 0.22363-0.5 0.5-0.5s0.5 0.22363 0.5 0.5v0.5c0.27637 0 0.5 0.22363 0.5 0.5v1.5h1.5c0.27637 0 0.5 0.22363 0.5 0.5v2zm3-13c0 0.27637-0.22363 0.5-0.5 0.5h-1v0.5c0 0.27637-0.22363 0.5-0.5 0.5s-0.5-0.22363-0.5-0.5v-0.5h-1c-0.27637 0-0.5-0.22363-0.5-0.5v-2c0-0.27637 0.22363-0.5 0.5-0.5h3c0.27637 0 0.5 0.22363 0.5 0.5v2z" fill="#303C42"/></g>
      </g>`

miro.onReady(async () => {
  Amplify.configure(awsExports);

  miro.initialize({
    extensionPoints: {
      exportMenu: {
        title: 'Retro Buddy',
        svgIcon: retroIcon,
        onClick: () => {
          miro.board.ui.openLeftSidebar('sidebar.html')
        },
      },
      bottomBar: {
        title: 'Retro Buddy',
        svgIcon: retroIcon,
        onClick: () => {
          miro.board.ui.openLeftSidebar('sidebar.html')
        }
      }
    },
  })
})
