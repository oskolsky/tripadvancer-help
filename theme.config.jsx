export default {
    logo: <span>Tripadvancer Help</span>,
    project: {
        link: 'https://www.tripadvancer.com',
        icon: (
            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4.12505 20.23L9.78947 10.4388V19.1373C9.78947 20.3501 10.7792 21.3333 12 21.3333C13.2208 21.3333 14.2105 20.3501 14.2105 19.1373V10.4388L19.8749 20.23C20.4853 21.2851 21.8372 21.6466 22.8944 21.0374C23.9516 20.4283 24.3139 19.0791 23.7035 18.0241L13.9717 1.20223C13.6285 0.531529 12.9488 0.0593685 12.1534 0.00520553C12.1028 0.00172348 12.0522 -3.43344e-06 12.0016 5.12484e-09L11.9984 5.91376e-07C11.9478 -3.48155e-06 11.8971 0.00172806 11.8464 0.00521951C11.0511 0.0594499 10.3714 0.531589 10.0283 1.20223L0.296508 18.0241C-0.31388 19.0791 0.0483514 20.4283 1.10557 21.0374C2.1628 21.6466 3.51466 21.2851 4.12505 20.23Z"
                    fill="#1890FF"
                />
            </svg>
        ),
    },
    useNextSeoProps() {
        return {
            titleTemplate: '%s – Tripadvancer Help',
        }
    },
    feedback: {
        content: null,
    },
    editLink: {
        component: null,
    },
    footer: false,
}
