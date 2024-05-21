-- CreateIndex
CREATE INDEX "Assignor_document_idx" ON "Assignor"("document");

-- CreateIndex
CREATE INDEX "Assignor_email_idx" ON "Assignor"("email");

-- CreateIndex
CREATE INDEX "Payable_assignorId_idx" ON "Payable"("assignorId");

-- CreateIndex
CREATE INDEX "Payable_assignorId_emissionDate_idx" ON "Payable"("assignorId", "emissionDate");

-- CreateIndex
CREATE INDEX "Payable_emissionDate_idx" ON "Payable"("emissionDate");
