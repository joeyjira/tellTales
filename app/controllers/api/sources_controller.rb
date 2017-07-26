class Api::SourcesController < ApplicationController
    def index
        @sources = Collection.find(params[:collection_id]).sources
        render "/api/sources/index"
    end

    def create
        @source = Source.new(source_params)

        if @source.save!
            render "/api/sources/show"
        else
            render json: @source.errors.full_messages, status: 422
        end 
    end

    def destroy
    end

    private

    def source_params
        params.require(:source).permit(:collection_id, :source_id)
    end
end