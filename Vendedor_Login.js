describe('Seller Log in', () => {
    it('It logs into a seller account', () => {
        cy.once('uncaught:exception', () => false);

        cy.visit('https://sellercentral.amazon.com.mx/ap/signin?openid.return_to=https%3A%2F%2Fsellercentral.amazon.com.mx%2Fsw%2FGREX%2FSignUp%2Fstep%2FAgreements%3Fpassthrough%252Faccount%3Dfba_soa%26passthrough%252FmarketplaceID%3DA1AM78C64UM0Y8%26passthrough%252FsuperSource%3DOAR%26ref%3Dsdmx_soa_hp_rp_h%26passthrough%252FinitialSessionID%3D133-0985709-0350048%26passthrough%252Fld%3DAZXXSOADirect_AZMXSOA-sell%26productTier%3DFBA%253ASILVER%26productType%3DFulfillmentByAmazon%253ASellOnAmazon%26marketplaceId%3DA1AM78C64UM0Y8%26forceGrex%3Dtrue%26language%3Des_ES%26lpgrtTokenId%3DA2MT3BZ6KWJKY9%26redirectAP%3D1&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_sw_signup_mx&openid.mode=checkid_setup&language=es_ES&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&ssoResponse=eyJ6aXAiOiJERUYiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiQTI1NktXIn0.ClWKqcgiQfZFlhxMp1gyr34uGq6aq5pxOKyAwKkZk5bkpZ90i36UmA.Uawo_HbmqJ5_EjkT.FRzdmhDd07MR59jQejU_xwjRXVoWxI3Uj6cd1mc4Ez55Ig3dS8-MqTwuFrlZO-d7Y0qD58lpe73AvoLWpPgrRRjGBotteh-ySLPiZdVJPzZPJtbBifXpPSzc12OtrHBII6WJ7jTgu299cDMeLqh80Nr0ar8-geTWC5W2gkZsjkVm6IM0NgQnN9OXpPqcDjtvRBeltXVD7A.r_qrFD1IJvzcef2GSwAvfA')


        cy.get('#ap_email')
            .type('sharonmn071@gmail.com')
            .should('have.value', 'sharonmn071@gmail.com')

        cy.get('#ap_password')
            .type('ProyectoSimulacion2022*!')
            .should('have.value', 'ProyectoSimulacion2022*!')


        cy.get('#signInSubmit').click()

    })
})