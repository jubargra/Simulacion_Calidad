describe('Aplicar_Filtro', () => {
    it('It uses the filters showed by Amazon', () => {
        cy.once('uncaught:exception', () => false);
        cy.visit('https://www.amazon.com.mx/b/ref=s9_acss_bw_cg_pcstore_2a1_w?node=10189659011&pf_rd_m=A3TO6F13CSVUA4&pf_rd_s=merchandised-search-9&pf_rd_r=ZK94P8TZ92TCC62ETE9T&pf_rd_t=101&pf_rd_p=411e92e2-ebd6-485d-906e-e3efe8dadee1&pf_rd_i=9687880011')

        cy.contains('Procesadores').click()
    })
})