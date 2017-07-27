class Api::SourcesController < ApplicationController
    def create
        @source = Source.new(source_params)
        if @source.save
            @collection = @source.collection
            render "api/collections/show"
        else
            render json: @source.errors.full_messages, status: 422
        end 
    end

    def destroy
        @source = Source.find(params[:id])
        @source.destroy
        @collection = @source.collection
        render "api/collections/show"
    end

    private

    def source_params
        values = params.require(:source).permit(:collection_id, :source_id)
        values[:collection_id] ||= params[:collection_id]
        values
    end
end